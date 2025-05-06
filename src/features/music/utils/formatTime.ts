export const formatTime = (time: number) => {
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor(time % 60)
  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds

  return `${minutes}:${paddedSeconds}`
}
