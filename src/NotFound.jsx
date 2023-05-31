import { useNavigate } from 'react-router-dom';
function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-lg-12">Page Not Found</div>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
      >
        Go home
      </button>
    </>
  );
}
export default NotFoundPage;
