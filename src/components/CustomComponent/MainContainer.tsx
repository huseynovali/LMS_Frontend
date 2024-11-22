function MainContainer({ children, ...props } : { children: React.ReactNode, className?: string }) {
  return (
    <div className={`w-full bg-white p-5 rounded-lg ${props.className}`}>
      {children}
    </div>
  );
}

export default MainContainer;
