console.log("Lights on!");
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script type="text/javascript">

  $(document).ready(function() {

      // list one content
      var one = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "black",
        "white",
        "gray",
        "turquoise",
        "maroon",
        "lavender",
        "olive",
      ];

      // list two content
      var two = [
        "dog",
        "cat",
        "elephant",
        "tiger",
        "lion",
        "snake",
        "monkey",
        "giraffe",
        "zebra",
        "penguin",
        "koala",
        "panda",
        "cheetah",
        "octopus",
        "kangaroo",
      ];
            
            // list three content
      var three = [
        "pit",
        "ravine",
        "trapdoor",
        "chasm",
        "well",
        "manhole",
        "ice hole",
        "sinkhole",
        "quicksand",
        "bathtub",
        "cave",
        "elevator shaft",
        "canyon",
        "pothole",
        "crater",
      ];
      }      

      // This is a very common randomizing function.
      // It takes a list (array) and returns one at random.
      function select_random(x){
        y = x[Math.floor(Math.random()*x.length)];
        return y;
      }

      function generate(){

        // Select a random item from each list
        var selected_one = select_random(one);
        var selected_two = select_random(two);
        var selected_three = select_random(three);

        // Take the selected (random) item from list and make it visible
        $('.list-one').html(selected_one);
        $('.list-two').html(selected_two);
        $('.list-three').html(selected_three);

      }

      $('.button').click(function() {
    generate();
  });

      generate();
});
</script>