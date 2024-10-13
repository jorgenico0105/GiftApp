import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchSchema } from '../interfaces/gifts.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {
  public giftsList:Gift[]=[];
  public _tagsHistory:string[]=[]
  private urlDic:string='https://api.giphy.com/v1/gifs'
  private apiKey:string='CTlFd6XMtZPPfowmPJrcLebHzMNfkPkb';
  constructor(private http:HttpClient) {
    this.getLocalStorage();
  }
  private organizeHistory(tag:string){
    tag=tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory=this.tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory=this._tagsHistory.splice(0,10)
    this.saveLocalStorage();
  }
  public get tagsHistory(){
    return [...this._tagsHistory]
  }
  private saveLocalStorage():void{
    localStorage.setItem('gifts',JSON.stringify(this._tagsHistory))
  }
  private getLocalStorage():void{
    if(!localStorage.getItem('gifts')){
      return
    }
    this._tagsHistory=JSON.parse(localStorage.getItem('gifts')!);
  }
  searchTag(tag:string):void{
    const params=new HttpParams()
    .set('api_key',this.apiKey)
    .set('q',tag)
    .set('limit','10')
    if(tag==='') return
    this.organizeHistory(tag)
    this.http.get<SearchSchema>(`${this.urlDic}/search`,{params})
    .subscribe(resp =>{
      this.giftsList=resp.data
      console.log(this.giftsList);
    })

    // fetch('https://api.giphy.com/v1/gifs/search?api_key=CTlFd6XMtZPPfowmPJrcLebHzMNfkPkb&q=Valorant&limit=10')
    //   .then(resp=>resp.json())
    //   .then(data=>console.log(data.data));
  }
}
