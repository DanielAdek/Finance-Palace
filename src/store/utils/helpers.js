import Axios from 'axios';
import toastr from 'toastr';


export const Promise = (method, path, data) => {
  const token = localStorage.getItem('x-auth-t');
  const url = `http://localhost:8081/api/v1${path}`;
  // const url = `http://ec2-34-242-208-37.eu-west-1.compute.amazonaws.com:9091/api/v1${path}`;
  const headers = token ? { "Access-Control-Allow-Origin": "*", "Authorization" : token } : { "Access-Control-Allow-Origin": "*"};
  const object = (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') ? { method: method.toUpperCase(), url, headers } : { method: method.toUpperCase(), url, headers, data };
  return Axios(object);
}

export const Alert = {
  error: message => {
    toastr.options.closeButton = true
    toastr.options.timeOut = 7200
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
    toastr.error(message)
  },
  success: message => {
    toastr.options.closeButton = true
    toastr.options.timeOut = 2400
    toastr.options.preventDuplicates = true;
    toastr.success(message)
  },
  info: message => {
    toastr.options.closeButton = true
    toastr.options.timeOut = 7200
    toastr.options.preventDuplicates = true;
    toastr.info(message)
  }
}

export const handleError = error => {
  if (error.response) {
    if (error.response.data.data && error.response.data.data.error) {
      return Alert.error((error.response.data.data.error.message || error.response.data.data.message));
    }
    if (error.response.data.error) {
      return Alert.error(error.response.data.error.message);
    }
    if (error.response.data.data) {
      return Alert.error(error.response.data.data.message);
    }
    return Alert.error(error.response.data.message);
  }
  return Alert.error(error.message);
}
