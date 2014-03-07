var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {sys.puts(stdout) }
exec("gfortran -o ./hello_fortran ./hello_fortran.f90", puts);
exec("./hello_fortran", puts);
