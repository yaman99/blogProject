import Swal from "sweetalert2";


export class NotificationService {
  async success(msg) {
    Swal.fire({
      title: "success!",
      text: msg,
      icon: "success",
      confirmButtonText: "Ok",
    });
  }

  error(msg){
    Swal.fire({
      title: "Error!",
      text: msg,
      icon: "error",
      confirmButtonText: "Ok",
    });
  }
}
