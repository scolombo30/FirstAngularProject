import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //append api_key for centralized solution
    const clonedReq = req.clone({
      params : req.params.append('api_key','33f7f2ce4e9344cc644ab38a1bb68a08')
    })

    return next.handle(clonedReq)
  }
}
