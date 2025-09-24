@RestController
public class RecommendationController {

    @PostMapping("/recommendation")
    public Map<String, Object> getCalorieRecommendation(@RequestBody BmiRequest req,
                                                        @RequestParam String goal) {
        double heightMeters = req.getHeight() / 100.0;
        double bmi = req.getWeight() / (heightMeters * heightMeters);

        int baseCalories = 2000;

        if (bmi < 18.5) {
            baseCalories = 2200;
        } else if (bmi > 25) {
            baseCalories = 1800;
        }

        int recommendedCalories;
        if (goal.equalsIgnoreCase("gain")) {
            recommendedCalories = baseCalories + 500;
        } else if (goal.equalsIgnoreCase("loss")) {
            recommendedCalories = baseCalories - 500;
        } else {
            recommendedCalories = baseCalories;
        }

        return Map.of(
            "bmi", String.format("%.2f", bmi),
            "goal", goal,
            "recommendedCalories", recommendedCalories,
            "message", "Based on your BMI and goal, you should consume about " + recommendedCalories + " kcal/day."
        );
    }
}
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
