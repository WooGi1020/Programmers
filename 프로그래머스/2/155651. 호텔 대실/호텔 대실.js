const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

function solution(book_time) {
    const CLEAN_TIME = 10;
    const rooms = new Array();
    const sorted_book_time = [...book_time].sort((a, b) => {
        const startA = timeToMinutes(a[0]);
        const startB = timeToMinutes(b[0]);
        return startA - startB;
    });
    
    for (const [start, end] of sorted_book_time) {
        const startMin = timeToMinutes(start);
        const endMin = timeToMinutes(end);
        
        rooms.sort((a, b) => a - b);

        if (rooms.length > 0 && rooms[0] <= startMin) {
            rooms[0] = endMin + CLEAN_TIME;
        } else {
            rooms.push(endMin + CLEAN_TIME);
        }
    }
    return rooms.length
}