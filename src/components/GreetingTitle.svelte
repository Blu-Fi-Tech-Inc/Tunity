<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Rise & Shine🌞";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "🎶Tune In🎶";
  } else {
    greeting = "The Night Is Still Young💫";
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
