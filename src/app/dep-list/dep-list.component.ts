import { Component, OnInit } from '@angular/core';
import {DepService} from '../service/dep.service';
import {Department} from '../medel/dep.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dep-list',
  templateUrl: './dep-list.component.html',
  styleUrls: ['./dep-list.component.css']
})
export class DepListComponent implements OnInit {

  constructor(private depService: DepService, private fb: FormBuilder) { }

  /**
   * part1-data
   */
  isloading = false;
  departments: Array<Department> = new Array<Department>();
  depForm: FormGroup;


  /**
   * part2-methods
   */
  /**
   * 获取部门数据
   */
  getDeps() {
    this.isloading = true;
    this.depService.getDeps().subscribe(
      (data) => {
        console.log('DepListComponent loadAllDepartments data', data);
        this.departments = data;
      },
      (error) => {
        console.log('DepListComponent loadAllDepartments error', error);
      },
      () => {
        this.isloading = false;
      }
    );

  }

  /**
   * 重置表单
   */
  resetForm() {
    this.depForm.reset();
  }
  /**
   * 添加部门
   */
  submitDepForm() {
    console.log('DepListComponent submitDepForm ', this.depForm.value);
    this.depService.addDep(this.depForm.value).subscribe(
      (result) => {
        console.log('DepListComponent submitDepForm addDep', result);
        // 如果创建成功，重新刷新列表
        if (result.id > 0) {
          this.getDeps();
          this.resetForm();
        }
      },
      (error) => {},
      () => {}
    );
  }
  editDep(dep) {
    this.depForm.setValue(dep);
  }
  /**
   * 删除指定部门
   */
  delDep(dep: Department) {
    this.depService.delDep(dep).subscribe(
      (result) => {
        this.getDeps();
      },
      (error) => {},
      () => {}
    );
  }
  /**
   * part3-events
   */
  ngOnInit() {
    this.getDeps();
    this.depForm = this.fb.group({
      id: [null],
      depName: [null, [Validators.required]],
      depCode: [null, [Validators.required]],
      depShortName: [null]
    });
  }

}
