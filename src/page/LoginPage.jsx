import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Buttons from "../component/general/Buttons";
import { login } from "../redux/action/loginAction";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, success, error } = useSelector((state) => state.login);

  const handleSeen = () => {
    setActive(!active);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (success) {
      toast.success("Login berhasil");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
    if (error) {
      toast.error("username & password anda salah");
    }
  }, [success, error]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, ease: "easeInOut" }} exit={{ opacity: 0 }} className="min-h-screen flex items-center justify-center bg-black/40">
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }} className="w-[350px] bg-white border rounded-lg py-6 px-4">
        <div className="mb-5">
          <a className="text-[12px]" href="/">
            kembali
          </a>
          <h3 className="text-center">Login</h3>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <input type="text" className="w-full outline-none py-2 px-2 border" placeholder="Username / Email" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-5 relative bg-red-500 flex items-center">
            {active ? <FaEye className="absolute right-2 cursor-pointer" onClick={handleSeen} /> : <FaEyeSlash className="absolute right-2 cursor-pointer" onClick={handleSeen} />}

            <input type={`${active ? "text" : "password"}`} className="w-full outline-none py-2 px-2 border" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-2 text-[13px] ">Lupa password ?</div>

          <Buttons loading={loading} title="Masuk" style="actionBtn text-[15px] font-semibold w-full mb-5 flex items-center justify-center" />
        </form>
        <div className="text-center text-[13px]">
          Kamu belum punya akun ? Yuk registrasi <a href="/register">disini</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;
