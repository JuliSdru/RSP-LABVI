import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";
import { Usuario } from "../modales/usuario";
import * as jwt_decode from "jwt-decode";
import {AngularFireStorage} from '@angular/fire/storage'
import { Locales } from '../modales/locales';
import { Productos } from '../modales/productos';

@Injectable({
  providedIn: 'root'
})
export class ServicioSPService {

  usu : Usuario;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private fire: AngularFirestore,
    private storage : AngularFireStorage,
    public afAuth: AngularFireAuth,
  ) { }

  traerToken(){
    try {
      const token = localStorage.getItem('token');
      const data = jwt_decode(token);
      // this.conce.email = data.email;
      // console.log(this.conce.email);
      return data;
    }
    catch (error) {
    }
  }

  traerMail(){
    const data = this.traerToken();
      return data.email;
  }

  guardarUsu(obj: Usuario){
    try{
      this.crear("usuarios/" + obj.email + "/datos", obj);
      // this.conce = obj;
   }
   catch(e){
      console.log(e);
   }
  }

  guardarLocal(obj: Locales){
    try{
      this.crear("locales/", obj);
   }
   catch(e){
      console.log(e);
   }
  }

  guardarProduc(obj: Productos){
    try{
      this.crear("productos/", obj);
   }
   catch(e){
      console.log(e);
   }
  }


  // traerConce(){
  //   console.log(this.conce);
  //   return this.conce;
  // }

  public traerFoto(path : string){
    return this.storage.ref(path).getDownloadURL();
  }

  

  public crear( collection : string, data : any){
    return this.fire.collection(collection).add(data);
  }

  public obtenerXId( collection : string, id : string){
    return this.fire.collection(collection).doc(id).snapshotChanges();
  }

  public obtenerXTodos( collection : string){
    return this.fire.collection(collection).snapshotChanges();
  }

  public actualizar( collection : string, id : string, data : any){
    return this.fire.collection(collection).doc(id).set(data);
  }

  public eliminar( collection : string, id : string){
    return this.fire.collection(collection).doc(id).delete();
  }

  public subirArchivo(file : any, path : string){
    return this.storage.upload(path,file);
  }
  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
