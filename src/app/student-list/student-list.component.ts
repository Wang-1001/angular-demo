import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  /**
   * part1-定义变量
   */
  students = [];
  studentName = '';
  studentNo = '';

  /**
   * part2-定义交互方法
   */
  loadStudentsData() {
    this.students = [
      {
        studentNo: '1001',
        studentName: '学生1'
      }, {
        studentNo: '1002',
        studentName: '学生2'
      }, {
        studentNo: '1003',
        studentName: '学生3'
      }
    ];
    console.log('StudentListComponent loadStudentsData students', this.students);
  }

  addStudent() {
    console.log("StudentListComponent addStudent");
    const student = {
      studentNo: this.studentNo,
      studentName: this.studentName
    }
    this.students.push(student);
  }

  /**
   * part3-组件生命周期
   */
  ngOnInit() {
    this.loadStudentsData();

  }

}

