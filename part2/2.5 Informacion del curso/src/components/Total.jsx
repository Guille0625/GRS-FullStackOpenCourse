const Total = ({ course }) => {
    const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)
    return <p>Total of {total} exercises</p>
}

export default Total