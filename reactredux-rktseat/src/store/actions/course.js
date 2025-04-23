export function toggleLeson (module, lesson) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson
  }
}