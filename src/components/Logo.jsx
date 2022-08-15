function Logo(props) {
  return (
    <div className="w-12 h-12 flex items-center justify-center border-2 border-std-green rounded-full cursor-pointer hover:bg-std-green/[0.2] transition-colors">
      <h1 className="font-spaceMono text-std-green text-xl">{props.authorData.first_name[0]}</h1>
    </div>
  );
}

export default Logo;
