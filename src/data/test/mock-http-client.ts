import { HttpStatusCode } from './../protocols/http/http-response'
import { HttpResponse } from '@/data/protocols/http/http-response'
import { HttpPostParams, HttpPostClient } from '@/data/protocols/http/http-post-client'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {// Spy é um dublê que implementa o protocolo HttpPostClient, o objetivo é testar apenas a unidade RemoteAuthentication
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return Promise.resolve(this.response)
  }
}
