import React, { useState, useEffect, useCallback } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";
import logo from "./../../images/at_new_pink_gem.svg";

function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);

	// Handle key down events 
	const handleKeyDown = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			event.target.click();
		}
	};

	const handleCloseMenu = () => {
		setMenuOpen(false);
	};

	//Closing with esc
	const handleMenuKeyDown = useCallback((event) => {
		if (event.key === "Escape") {
			handleCloseMenu();
		}
	}, []);

	//If menu open, no scroll on body
	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("no-scroll");
			document.addEventListener("keydown", handleMenuKeyDown);
		} else {
			document.body.classList.remove("no-scroll");
			document.removeEventListener("keydown", handleMenuKeyDown);
		}

		return () => {
			document.body.classList.remove("no-scroll");
			document.removeEventListener("keydown", handleMenuKeyDown);
		};
	}, [menuOpen, handleMenuKeyDown]);

	
	useEffect(() => {
		Events.scrollEvent.register("begin", (to, element) => {
			// console.log("begin", to, element); 
		});

		Events.scrollEvent.register("end", (to, element) => {
			//console.log("end", to, element); 
	
			if (element) {
				element.focus();
			}
		});

		scrollSpy.update();

		return () => {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
		};
	}, []);

	const handleSkipLink = (event) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			const mainElement = document.getElementById("main");
			if (mainElement) {
				mainElement.focus();
			}
		}
	};

	return (
		<>
			<Link
				to="main"
				spy={true}
				smooth={true}
				duration={500}
				offset={-70}
				className="skip-link"
				tabIndex="0"
				isDynamic={true}
				onKeyDown={handleSkipLink}>
				Hoppa till huvudinnehållet
			</Link>

			<nav id="navbar">
				<div className="nav-logo-container">
					<Link
						to="header"
						spy={true}
						smooth={true}
						duration={500}
						offset={-70}
						className="nav-logo"
						tabIndex="0"
						isDynamic={true}
						onKeyDown={handleKeyDown}>
						<img src={logo} height="60px" width="170px" alt="Till startsida Cecilia Egevad" />
					</Link>
				</div>

				<button
					className="menu-toggle"
					onClick={() => setMenuOpen(!menuOpen)}
					onKeyDown={handleKeyDown}
					aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
					aria-expanded={menuOpen}
					aria-controls="nav-links">
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>

				<ul id="nav-links" className={menuOpen ? "open" : ""}>
					<li>
						<Link
							to="header"
							spy={true}
							smooth={true}
							duration={500}
							offset={-70}
							tabIndex="0"
							activeClass="active"
							onKeyDown={handleKeyDown}
							onClick={handleCloseMenu}>
							Start
						</Link>
					</li>
					<li>
						<Link
							to="about"
							spy={true}
							smooth={true}
							duration={500}
							offset={-70}
							tabIndex="0"
							activeClass="active"
							onKeyDown={handleKeyDown}
							onClick={handleCloseMenu}>
							Om mig
						</Link>
					</li>
					<li>
						<Link
							to="portfolio"
							spy={true}
							smooth={true}
							duration={500}
							offset={-70}
							tabIndex="0"
							activeClass="active"
							onKeyDown={handleKeyDown}
							onClick={handleCloseMenu}>
							Portfolio
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							duration={500}
							offset={-70}
							tabIndex="0"
							activeClass="active"
							onKeyDown={handleKeyDown}
							onClick={handleCloseMenu}>
							Kontakt
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;  

/* import React, { useState, useEffect, useCallback } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navigation.css";
import logo from "./../../images/at_new_pink_gem.svg";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle key down events
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.target.click();
    }
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  // Closing with esc
  const handleMenuKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      handleCloseMenu();
    }
  }, []);

  // Handle menu state change
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("keydown", handleMenuKeyDown);
    } else {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleMenuKeyDown);
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", handleMenuKeyDown);
    };
  }, [menuOpen, handleMenuKeyDown]);

  // Register scroll events
  useEffect(() => {
    const handleScrollBegin = (to, element) => {
      // console.log("begin", to, element); 
    };

    const handleScrollEnd = (to, element) => {
      // console.log("end", to, element); 
      if (element) {
        element.focus();
      }
    };

    Events.scrollEvent.register("begin", handleScrollBegin);
    Events.scrollEvent.register("end", handleScrollEnd);

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin", handleScrollBegin);
      Events.scrollEvent.remove("end", handleScrollEnd);
    };
  }, []);

  // Handle skip link
  const handleSkipLink = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const mainElement = document.getElementById("main");
      if (mainElement) {
        mainElement.focus();
      }
    }
  };

  return (
    <>
      <Link
        to="main"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className="skip-link"
        tabIndex="0"
        isDynamic={true}
        onKeyDown={handleSkipLink}
      >
        Hoppa till huvudinnehållet
      </Link>

      <nav id="navbar">
        <div className="nav-logo-container">
          <Link
            to="header"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="nav-logo"
            tabIndex="0"
            isDynamic={true}
            onKeyDown={handleKeyDown}
          >
            <img src={logo} height="60px" width="170px" alt="Till startsida Cecilia Egevad" />
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={handleKeyDown}
          aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
          aria-expanded={menuOpen}
          aria-controls="nav-links"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul id="nav-links" className={menuOpen ? "open" : ""}>
          <li>
            <Link
              to="header"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              tabIndex="0"
              activeClass="active"
              onKeyDown={handleKeyDown}
              onClick={handleCloseMenu}
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              tabIndex="0"
              activeClass="active"
              onKeyDown={handleKeyDown}
              onClick={handleCloseMenu}
            >
              Om mig
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              tabIndex="0"
              activeClass="active"
              onKeyDown={handleKeyDown}
              onClick={handleCloseMenu}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              tabIndex="0"
              activeClass="active"
              onKeyDown={handleKeyDown}
              onClick={handleCloseMenu}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
 */