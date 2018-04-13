/* Here is the regular function form:*/
/*
function validateUsr(username) {
  let res = /^[a-z0-9\_]{4,16}$/.test(username);
  console.log(res);
  return res;
}
*/
/* Here it is in arrow form: */
const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);

validateUsr('asddsa');//true);
validateUsr('a');//false);
validateUsr('Hass');//false);
validateUsr('Hasd_12assssssasasasasasaasasasasas');// false);
validateUsr('');//false);
validateUsr('____');//true);
validateUsr('012');//false);
validateUsr('p1pp1');//true);
validateUsr('asd43 34');//false);
validateUsr('asd43_34');//true);

