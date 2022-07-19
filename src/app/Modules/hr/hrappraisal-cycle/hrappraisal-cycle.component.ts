import { Component, OnInit } from '@angular/core';
import { PerformanceManagementService } from '../../../Pages/services/performance-management.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-hrappraisal-cycle',
  templateUrl: './hrappraisal-cycle.component.html',
  styleUrls: ['./hrappraisal-cycle.component.css']
})
export class HrappraisalCycleComponent implements OnInit {

  constructor(private PerformanceManagementService:PerformanceManagementService ) { }

  appraisallist:any;
  count:any;
  search:any;
 
  ngOnInit(): void {
    this.GetAppraisalCycle();
  }


  public GetAppraisalCycle() {
    this.PerformanceManagementService.GetAppraisalCycle().subscribe(
      data => {
        debugger
      this.appraisallist=data;
      this.count=this.appraisallist.length;
      })
  }

  public delete(ID: any) {
    debugger
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want to delete it.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value == true) {
        this.PerformanceManagementService.DeleteAppraisalCycle(ID).subscribe(
          data=>{
          debugger
          Swal.fire('Deleted Successfully')
          this.GetAppraisalCycle();
          // location.reload();
        })
      }
    })
  }





}
