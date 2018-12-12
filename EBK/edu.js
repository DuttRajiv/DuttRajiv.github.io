  $(function () {
      var i = 1
      setInterval(function () {
          for(;i<=4;)
        var newnode = document.createElement('p')
        newnode.id = "p" + i
        const newLocal = document.body.appendChild(newnode);
        $('#p' + i).load('essay' + i + '.txt');
        i++
      }, 1000)
      

    });
  
