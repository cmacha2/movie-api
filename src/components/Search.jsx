import styles from "./Search.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {useQuery} from "../hooks/useQuery"
import { useEffect } from "react";

export function Search() {
  const query = useQuery();
  const search = query.get("search");

  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
      setSearchText(search || "")
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/?search=${searchText}`);
  };
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      {" "}
      {/* debe estar entre form para cuando des enter ejecute la accion */}
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Movie"
          value={searchText}
          onChange={(e) =>
            setSearchText(
              e.target
                .value /* .toUpperCase()  capturo lo que el usuario escribe y lo convierto a mayuscula*/
            )
          }
        />
        <button className={styles.searchButton} type="submit">
          Buscar
        </button>
      </div>
    </form>
  );
}
