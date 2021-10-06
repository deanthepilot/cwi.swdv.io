<template>
  <div>
    <main>
      <br />
      <hr />
      <p id="contact">Contact Me</p>
      <div class="form">
        <fieldset>
          <form action="../thankYou.php" method="POST">
            <div id="info">
              <label for="name">Name:</label>
              <input type="text" name="Name" size="50" id="name" /><br />

              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                size="30"
                id="email"
              /><br /><br />

              <label for="enjoy">Did you enjoy my portfolio?</label><br />
              <input
                type="radio"
                name="enjoy"
                value="Yes"
                id="enjoy"
              />Yes<br />
              <input type="radio" name="enjoy" value="No" />No<br />

              <br /><label for="rate"
                >Please rate my portfolio on a scale of 1-10.</label
              ><br />
              <select name="rating" id="rate">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <br />
              <br />
              <label for="message">Enter your comments here:</label><br />
              <textarea
                cols="100"
                rows="10"
                name="comment"
                id="message"
              ></textarea
              ><br /><br />
            </div>
            <input type="submit" id="submit" value="Submit" class="btn" />
            <input type="reset" id="reset" value="Reset" class="btn" />
          </form>
        </fieldset>
      </div>
    </main>
  </div>
</template>