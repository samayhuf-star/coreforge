export const exercises = [
  { id: 'bicycle-crunches', name: 'Bicycle Crunches', cue: 'Elbow to opposite knee, extend the other leg slowly.', duration: 40, reps: 20, level: 'beginner' },
  { id: 'plank', name: 'Plank', cue: 'Body in a straight line. Squeeze glutes and core.', duration: 30, reps: null, level: 'beginner' },
  { id: 'dead-bug', name: 'Dead Bug', cue: 'Lower opposite arm and leg without arching your back.', duration: 40, reps: 12, level: 'beginner' },
  { id: 'leg-raises', name: 'Leg Raises', cue: 'Lower legs slowly without letting your lower back lift.', duration: 40, reps: 12, level: 'intermediate' },
  { id: 'russian-twist', name: 'Russian Twist', cue: 'Rotate fully. Keep feet elevated if possible.', duration: 40, reps: 20, level: 'intermediate' },
  { id: 'mountain-climbers', name: 'Mountain Climbers', cue: 'Drive knees toward chest at a controlled pace.', duration: 40, reps: 24, level: 'intermediate' },
  { id: 'v-ups', name: 'V-Ups', cue: 'Reach hands to toes. Control the descent.', duration: 40, reps: 15, level: 'advanced' },
];

export const plans = {
  beginner: { name: 'Beginner 30-Day', description: 'Build the foundation. Perfect if you are new to core training.', days: 30 },
  intermediate: { name: 'Intermediate 30-Day', description: 'Increase intensity and volume.', days: 30 },
  advanced: { name: 'Advanced 30-Day', description: 'High intensity for experienced trainees.', days: 30 },
};
