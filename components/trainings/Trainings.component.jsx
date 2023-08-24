import { useState } from "react"

const Trainings = () => {
    const [trainings, setTrainings] = useState([]) 
    
    return (
        <>
            {trainings.map((training, i) => {
                return (
                    <div key={i}>
                        {JSON.stringify(training)}
                    </div>
                )
            })}
        </>
    )
}

export default Trainings;