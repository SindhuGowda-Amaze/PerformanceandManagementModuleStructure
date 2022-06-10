import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerformanceManagementService } from '../Services/performance-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public DigiofficeService: PerformanceManagementService, public router: Router) { }
  accessToken: string | undefined;
  companycode: any;
  username: any;
  roledid: any;
  password: any;
  showpassword: any;
  showotp: any;
  Otp: any;
  newpassword: any
  email: any
  currentUrl: any
  companyid: any;
  loader: any
  otp: any;
  password1: any;
  api:any;
  public Attactments = [];

  ngOnInit(): void {
    this.currentUrl = window.location.href;
    this.showpassword = 0;
   
  }

  public getroleid(event: any) {
    this.roledid = event.target.value;
  }

  Showhidepassword() {
    debugger
    if (this.showpassword == 0) {
      this.showpassword = 1;
    }
    else {
      this.showpassword = 0;
    }
  }

  public getCompanyDetails(event: any) {
    debugger
    this.companyid = event.target.value;
    this.DigiofficeService.GetCompanyID(this.companyid)
      .subscribe({
        next: data => {
          debugger
          let temp: any = data;
          if (temp.length == 0) {
            Swal.fire('Invalid Compnay')
          }
          else {
            sessionStorage.setItem('digiofficeapiurl', temp.officeapiurl);
            sessionStorage.setItem('payrollapiurl', temp.payrollapiurl);
            sessionStorage.setItem('Companylogo', temp.companylogo);
            sessionStorage.setItem('companyid', this.companyid)
          }
        }, error: (err) => {
          Swal.fire('Issue in Getting Company ID');
          this.loader = false;
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public login() {
    debugger
    this.loader = true;
    if (this.roledid == 6) {
      this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 6)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              Swal.fire('Incorrect Username Or Password');
              this.loader = false;
            }
            else {
              sessionStorage.setItem('roledid', this.roledid);
              localStorage.setItem('roledid', this.roledid);
              localStorage.setItem('staffid', temp[0].id);
              localStorage.setItem('UserName', temp[0].name);
              localStorage.setItem('email', temp[0].emailID);
              localStorage.setItem('Department', temp[0].department_name);
              localStorage.setItem('levelid', temp[0].levelid);
              localStorage.setItem('Province', temp[0].district)
              localStorage.setItem('shiftID', temp[0].shiftID)
              this.router.navigate(['/Employee/Employeedashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }, error: (err) => {
            Swal.fire('Issue in Getting My Details For Login');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
    else if (this.roledid == 2) {
      this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 2)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              Swal.fire('Incorrect Username Or Password');
              this.loader = false;
            }
            else {
              sessionStorage.setItem('roledid', this.roledid);
              localStorage.setItem('roledid', this.roledid);
              localStorage.setItem('staffid', temp[0].id);
              localStorage.setItem('UserName', temp[0].name);
              localStorage.setItem('email', temp[0].emailID);
              localStorage.setItem('Department', temp[0].department_name);
              localStorage.setItem('levelid', temp[0].levelid);
              localStorage.setItem('Province', temp[0].district)
              localStorage.setItem('shiftID', temp[0].shiftID)
              this.router.navigate(['/Manager/ManagerDashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }, error: (err) => {
            Swal.fire('Issue in Getting My Details For Login');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
    else if (this.roledid == 1) {
      this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 41)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              Swal.fire('Incorrect Username Or Password');
              this.loader = false;
            }
            else {
              sessionStorage.setItem('roledid', this.roledid);
              localStorage.setItem('roledid', this.roledid);
              localStorage.setItem('staffid', temp[0].id);
              localStorage.setItem('UserName', temp[0].name);
              localStorage.setItem('email', temp[0].emailID);
              localStorage.setItem('Department', temp[0].department_name);
              localStorage.setItem('levelid', temp[0].levelid);
              localStorage.setItem('Province', temp[0].district)
              localStorage.setItem('shiftID', temp[0].shiftID)
              this.router.navigate(['/Admin/Admindashbaord']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }, error: (err) => {
            Swal.fire('Issue in Getting My Details For Login');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
    else if (this.roledid == 9) {
      this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 9)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              Swal.fire('Incorrect Username Or Password');
              this.loader = false;
            }
            else {
              sessionStorage.setItem('roledid', this.roledid);
              localStorage.setItem('roledid', this.roledid);
              localStorage.setItem('staffid', temp[0].id);
              localStorage.setItem('UserName', temp[0].name);
              localStorage.setItem('email', temp[0].emailID);
              localStorage.setItem('Department', temp[0].department_name);
              localStorage.setItem('levelid', temp[0].levelid);
              localStorage.setItem('Province', temp[0].district)
              localStorage.setItem('shiftID', temp[0].shiftID)
              this.router.navigate(['/HR/HRDashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }, error: (err) => {
            Swal.fire('Issue in Getting My Details For Login');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
    else if (this.roledid == 8) {
      this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 8)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              Swal.fire('Incorrect Username Or Password');
              this.loader = false;
            }
            else {
              sessionStorage.setItem('roledid', this.roledid);
              localStorage.setItem('roledid', this.roledid);
              localStorage.setItem('staffid', temp[0].id);
              localStorage.setItem('UserName', temp[0].name);
              localStorage.setItem('email', temp[0].emailID);
              localStorage.setItem('Department', temp[0].department_name);
              localStorage.setItem('levelid', temp[0].levelid);
              localStorage.setItem('Province', temp[0].district)
              localStorage.setItem('shiftID', temp[0].shiftID)
              this.router.navigate(['/Admin/ManagerDashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }, error: (err) => {
            Swal.fire('Issue in Getting My Details For Login');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
    else if (this.roledid == 10) {
      this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 10)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              Swal.fire('Incorrect Username Or Password');
              this.loader = false;
            }
            else {
              sessionStorage.setItem('roledid', this.roledid);
              localStorage.setItem('roledid', this.roledid);
              localStorage.setItem('staffid', temp[0].id);
              localStorage.setItem('UserName', temp[0].name);
              localStorage.setItem('email', temp[0].emailID);
              localStorage.setItem('Department', temp[0].department_name);
              localStorage.setItem('levelid', temp[0].levelid);
              localStorage.setItem('Province', temp[0].district)
              localStorage.setItem('shiftID', temp[0].shiftID)
              this.router.navigate(['/Admin/ManagerDashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }, error: (err) => {
            Swal.fire('Issue in Getting My Details For Login');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
    else if (this.roledid == 11) {
      this.DigiofficeService.GetMyDetailsForLogin(this.username, this.password, 11)
        .subscribe({
          next: data => {
            debugger
            let temp: any = data;
            if (temp.length == 0) {
              Swal.fire('Incorrect Username Or Password');
              this.loader = false;
            }
            else {
              sessionStorage.setItem('roledid', this.roledid);
              localStorage.setItem('roledid', this.roledid);
              localStorage.setItem('staffid', temp[0].id);
              localStorage.setItem('UserName', temp[0].name);
              localStorage.setItem('email', temp[0].emailID);
              localStorage.setItem('Department', temp[0].department_name);
              localStorage.setItem('levelid', temp[0].levelid);
              localStorage.setItem('Province', temp[0].district)
              localStorage.setItem('shiftID', temp[0].shiftID)
              this.router.navigate(['/Admin/ManagerDashboard']).then(() => {
                this.loader = false;
                location.reload();
              });
            }
          }, error: (err) => {
            Swal.fire('Issue in Getting My Details For Login');
            this.loader = false;
            // Insert error in Db Here//
            var obj = {
              'PageName': this.currentUrl,
              'ErrorMessage': err.error.message
            }
            this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
              data => {
                debugger
              },
            )
          }
        })
    }
    else {
      Swal.fire('Incorrect Username Or Password');
      this.loader = false;
    }
  }

  public SendOTP() {
    debugger
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          let temp: any = data.filter(x => (x.emailID === this.email));
          if (temp.length != 0) {
            this.otp = Math.floor(100000 + Math.random() * 900000);
            this.showotp = 1;
            var entity1 = {
              'emailto': this.email,
              'emailsubject': 'OTP for Resetting Your Password',
              'emailbody': this.otp + ' is your verification code for Reset Password.',
              'attachmenturl': this.Attactments,
              'cclist': this.email,
              'bcclist': this.email,
            }
            var entity2 = {
              'EmailID': this.email,
              'OTP': this.otp
            }
            this.DigiofficeService.sendemailattachements(entity1).subscribe((_res: any) => {
              debugger;
              this.Attactments = [];
            })
            this.DigiofficeService.Updateotp(entity2).subscribe((_res: any) => {
              debugger;

            })
          }
          else {
            Swal.fire('This Email Address is Not Registered with HPM')
          }
        }, error: (err) => {
          Swal.fire('Issue in Getting My Details');
          this.loader = false;
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public VerifyOTP() {
    debugger
    var entity2 = {
      'EmailID': this.email,
      'OTP': this.Otp
    }
    this.DigiofficeService.Verifyotp(entity2)
      .subscribe({
        next: data => {
          debugger
          if (data == 1) {
            this.showotp = 2;
          }
          else {
            if (this.Otp == '' || this.Otp == undefined || this.Otp == null) {
              Swal.fire('OTP Field Cannot be Empty');
            }
            else {
              Swal.fire('OTP Mismatch');
            }
          }
        }, error: (err) => {
          Swal.fire('Issue in Verifing OTP');
          this.loader = false;
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  getpassword() {
    debugger
    this.DigiofficeService.GetMyDetails()
      .subscribe({
        next: data => {
          debugger
          let temp: any = data.filter(x => (x.emailID === this.email));
          if (temp.length != 0) {
            this.password1 = temp[0].password;
            var entity1 = {
              'emailto': this.email,
              'emailsubject': 'Forgot Password',
              'emailbody': 'Hi , <br> ' + this.password1 + ' is your Password for login into DigiOffice.<br> Thanks <br> Team Digi-Office',
              'attachmenturl': this.Attactments,
              'cclist': this.email,
              'bcclist': this.email,
            }
            this.DigiofficeService.sendemailattachementsforemail(entity1)
              .subscribe({
                next: data => {
                  debugger
                  this.Attactments = [];
                  Swal.fire('Password sent to your email.')
                }, error: (err) => {
                  Swal.fire('Issue in Sending Attachments For Email');
                  this.loader=false;
                  // Insert error in Db Here//
                  var obj = {
                    'PageName': this.currentUrl,
                    'ErrorMessage': err.error.message
                  }
                  this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
                    data => {
                      debugger
                    },
                  )
                }
              })

          }
        }, error: (err) => {
          Swal.fire('Issue in Getting password');
          this.loader = false;
          // Insert error in Db Here//
          var obj = {
            'PageName': this.currentUrl,
            'ErrorMessage': err.error.message
          }
          this.DigiofficeService.InsertExceptionLogs(obj).subscribe(
            data => {
              debugger
            },
          )
        }
      })
  }

  public Save() {

    this.getpassword();

  }
}