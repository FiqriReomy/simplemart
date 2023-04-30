import { useEffect } from "react";
import Buttons from "./Buttons";
import Cart from "./element/Cart";
import Menu from "./element/Menu";
import { BiCart, BiMenu } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SearchInput from "./element/SearchInput";
import { fadeIn } from "../../features/Animation";
import { animateScroll as scroll } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "../../redux/action/loginAction";
import { handleCart, handleMenu, handleSearch } from "../../redux/action/counterAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, success } = useSelector((state) => state.login);
  const { cart } = useSelector((state) => state.cart);
  const totalAmount = cart.reduce((acc, curr) => acc + curr.amount, 0);
  const { openCart, openMenu, openSearch } = useSelector((state) => state.counter);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearchClose = () => {
    dispatch(handleSearch(false));
  };

  const handleOpenCart = () => {
    dispatch(handleCart(!openCart));
  };

  const handleOpenMenu = () => {
    dispatch(handleMenu(!openMenu));
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleClick = () => {
    navigate(`/`);
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (success) window.location.reload();
  }, [success]);

  return (
    <div className="h-[60px] " id="home">
      <div className="fixed left-0 right-0 top-0 bg-primary z-[999] " onClick={handleSearchClose}>
        <div className="container py-2 px-5 flex flex-wrap items-center justify-between">
          <div className="hidden md:flex md:w-[20%] px-2">
            <button onClick={handleClick} className="cursor-pointer text-[20px] font-semibold text-white">
              <a href="/">SIMPLEMART</a>
            </button>
          </div>
          <div
            className="w-[70%] md:w-[60%] relative flex flex-wrap "
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className=" w-full">
              <SearchInput />
            </div>
          </div>
          <div className=" w-[30%] md:w-[20%] flex_center gap-4 px-2">
            <button className="relative flex items-center justify-end">
              <BiCart onMouseEnter={handleOpenCart} className="text-white" size={25} />
              <AnimatePresence mode="wait"> {openCart && <Cart totalAmount={totalAmount} handleOpenCart={handleOpenCart} />}</AnimatePresence>
              <span className="absolute top-[-10px] right-[-5px] h-5 w-5 rounded-full  text-[8px] text-white bg-red-500">
                <b>{totalAmount}</b>
              </span>
            </button>

            {user.length !== 0 ? (
              <button className="relative flex items-center justify-end " onMouseEnter={handleOpenMenu}>
                <div className="w-7 h-7 overflow-hidden rounded-full bg-white">
                  <img className="w-full object-cover" src={user.image} alt="user_image" />
                </div>
                {openMenu && <Menu user={user} handleLogout={handleLogout} handleOpenMenu={handleOpenMenu} />}
              </button>
            ) : (
              <div className="flex_center gap-2 text-[13px] font-bold">
                <Buttons title="Masuk" action={handleLogin} style="py-2 px-5 bg-primary border-white border-2 rounded-lg text-white font-medium active:scale-95 hover:border-black  duration-300" />
              </div>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {openSearch || openMenu || openCart ? (
          <motion.div variants={fadeIn(0.3, 0)} initial={"hidden"} whileInView={"show"} exit={"exit"} className="fixed top-0 right-0 bottom-0 left-0 bg-black/60 z-[99]" onClick={handleSearchClose}></motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
