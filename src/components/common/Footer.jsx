export default function Footer ({ textMuted }){
  return (
    <footer className={`mt-10 4text-sm font-mono text-center ${textMuted} flex flex-col items-center gap-2 p-10`}>
        <p>Designed & Built by Yasmeen Abu Zaid</p>
        <p className="text-xs opacity-50">&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};