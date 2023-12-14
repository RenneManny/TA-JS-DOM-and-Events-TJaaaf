
    function addMovie() {
      var movieInput = document.getElementById('movieInput');
      var movieList = document.getElementById('movieList');

      if (movieInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.innerHTML = `
          <input type="checkbox" class="watched-checkbox">
          ${movieInput.value}
          
          <button class="remove-btn" onclick="removeMovie(this)">Remove</button>
          
        `;
        movieList.appendChild(li);
        movieInput.value = '';
      }
    }

    function removeMovie(btn) {
      var listItem = btn.parentNode;
      listItem.parentNode.removeChild(listItem);
    }
