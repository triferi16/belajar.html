$(document).ready(function(){
    // alert ("Selamat Datang");
    var strhtml='<button type="button" id="idbtnpop" class="btn btn-warning">Pup up</button>';
    var strhtml2 ='<form>'+
'            <div class="form-group">'+
'              <label for="exampleInputEmail1">Email address</label>'+
'              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">'+
'            </div>'+
'            <div class="form-group">'+
'              <label for="exampleInputPassword1">Password</label>'+
'              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">'+
'            </div>'+
'            <div class="form-group">'+
'              <label for="exampleInputFile">File input</label>'+
'              <input type="file" id="exampleInputFile">'+
'              <p class="help-block">Example block-level help text here.</p>'+
'            </div>'+
'            <div class="checkbox">'+
'              <label>'+
'                <input type="checkbox"> Check me out'+
'              </label>'+
'            </div>'+
'            <button type="submit" class="btn btn-default">Submit</button>'+
'          </form>';
    $('#idbtnform').click(function(){
        // alert('Tombol Ditekan');
    $('#iddivform').append(strhtml);

    $('#idbtnpop').click(function(){
        $('#idmodal').modal('show');

        $('#idmodalbody').append(strhtml2);
    });
    
    });
    
});
