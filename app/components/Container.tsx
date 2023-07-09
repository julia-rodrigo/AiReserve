'use client'; 
// we are going to import this contianer in other client components

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="
            max-w-containerxl
            mx-auto
            xl:px-20
            md:px-10
            sm:px-2
            px-4
        "
    >{ children }</div>
  )
}

export default Container