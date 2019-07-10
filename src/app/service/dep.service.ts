import {Injectable} from '@angular/core';
/*import {HttpClient} from '@angular/common/http';*/
import { HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../medel/dep.model';

@Injectable()
export class DepService {
  constructor(private http: HttpClient) {}
  /**
   * 获取全部部门
   */
  /* 响应式编程*/
  /* Observable 可观察*/
  public getDeps = (): Observable<Array<Department>> => {
    return  this.http.get<Array<Department>>('http://121.43.180.55:8182/api/departments');
  }
  /**
   * 获取部门-分页
   */
  public getDepsPaged = (pageIndex, pageSize): Observable<HttpResponse<any>> => {
    return this.http.get<HttpResponse<any>>('http://121.43.180.55:8182/api/departments?page='
      + pageIndex + '&size=' + pageSize , { observe: 'response' });
  }

  /**
   * 创建部门
   */
  public addDep = (dep: Department ): Observable<Department> => {
    if (dep.id > 0) {
      return  this.http.put<Department>('http://121.43.180.55:8182/api/departments', dep);
    } else {
      return  this.http.post<Department>('http://121.43.180.55:8182/api/departments', dep);
    }
  }
  /**
   * 删除部门
   */
  public delDep = (dep: Department ): Observable<any> => {
    return  this.http.delete('http://121.43.180.55:8182/api/departments/' + dep.id);
  }
}
