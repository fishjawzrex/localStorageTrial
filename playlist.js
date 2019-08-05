


      function init() {
         var button = document.getElementById("addButton");
         button.onclick = handleButtonClick;
         loadPlaylist();
      }
      function handleButtonClick() {
        var textInput = document.getElementById("songTextInput");
        var songTitle = textInput.value;

        alert("Adding... " + songTitle);
        var li = document.createElement("li");
        li.innerHTML = songTitle;
        var ul = document.getElementById("playlist");
        ul.appendChild(li);
        save(songTitle);



      }
      window.onload = init;
