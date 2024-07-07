import ClipLoader from 'react-spinners/ClipLoader'

const Spinners = ({loading}) => {
 const cssOverride = {
display : "block",
margin: "100px auto"
 }

  return (
 <ClipLoader  
 color='#4338ca'
 cssOverride={cssOverride}
 size={150}
 
 />
  )
}

export default Spinners
