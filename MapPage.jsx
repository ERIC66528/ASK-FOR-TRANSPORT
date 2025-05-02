export default function MapPage() {
  return (
    <div className="h-screen">
      <iframe
        src="https://maps.google.com/maps?q=kenya&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        loading="lazy"
        title="Map"
      ></iframe>
    </div>
  );
}
