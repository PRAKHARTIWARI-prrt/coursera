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
