<div class="login-box">
  <h3>Enter Your Details</h3>
  <form id="bmiForm">
    <input type="number" id="age" placeholder="Enter age" required><br><br>
    <input type="number" id="weight" placeholder="Enter weight (kg)" required><br><br>
    <input type="number" id="height" placeholder="Enter height (cm)" required><br><br>

    <button type="button" onclick="getRecommendation('gain')" class="btn btn-success">
      Muscle Gain
    </button>

    <button type="button" onclick="getRecommendation('loss')" class="btn btn-danger">
      Weight Loss
    </button>
    <button type="button" onclick="getRecommendation('maintain')" class="btn btn-primary">
      Maintain
    </button>
  </form>

  <div id="result" style="margin-top:20px; font-weight:bold; color:#166534;"></div>
</div>

<script>
async function getRecommendation(goal) {
  const reqBody = {
    age: document.getElementById("age").value,
    weight: document.getElementById("weight").value,
    height: document.getElementById("height").value,
    gender: "M"
  };

  const response = await fetch("http://localhost:8080/recommendation?goal=" + goal, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqBody)
  });

  const data = await response.json();
  document.getElementById("result").innerText = data.message;
}
</script>
