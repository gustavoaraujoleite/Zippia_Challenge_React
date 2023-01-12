/**
 * Component responsible for rendering the Main Page with carousel
 */

import { useCallback, useEffect, useState } from "react";
import { request } from "../../services/request";
import Card from "../../UI/Card";
import { Carousel, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import classes from "./style.module.css";
import Drop from "../../UI/Dropdown";

export default function JobsPage() {
  //useState for setting the data and carousel sliding control
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [filterClicked, setFilterClicked] = useState(false);
  const [chosenCompany, setChosenCompany] = useState("all");
  const [loading, setLoading] = useState(false);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  //fetching data and saving it to data variable
  const fetchDataHandler = useCallback(async () => {
    setLoading(true);
    try {
      const result = await request();
      result.data.jobs.map((items) => {
        return setData((prevData) => [
          ...prevData,
          {
            id: items.jobId,
            jobTitle: items.jobTitle,
            company: items.companyName,
            description: items.jobDescription,
            posted: parseInt(items.postedDate.split("d")[0]),
          },
        ]);
      });
    } catch (err) {
      console.log("Error fetching data");
    }
    setLoading(false);
  }, []);

  //Fetching data with useCallback for any promises update
  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  //Reset all filters
  const resetAll = useCallback(async () => {
    setChosenCompany("all");
    setFilterClicked(false);
    setIndex(0);
    fetchDataHandler();
  }, [fetchDataHandler]);

  function filterClickedHandler() {
    setFilterClicked(true);
  }
  function selectHandler(data) {
    if (data.target.value === "all") {
      setChosenCompany("all");
    } else {
      setChosenCompany(data.target.value);
    }
  }

  return (
    <>
      {/* Show Spinner for Loading indicator */}
      {loading && (
        <div className={classes.spinner_container}>
          <Spinner
            animation="grow"
            variant="warning"
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>
      )}
      {!loading && (
        <>
          <div className={classes.btn_container}>
            <Drop
              data={data.slice(1, 11)}
              onSelect={(data) => selectHandler(data)}
              defaultValue={chosenCompany}
            />
            <Button
              onClick={filterClickedHandler}
              variant="dark"
              disabled={filterClicked ? true : false}
            >
              Jobs posted in the last 7 days
            </Button>

            <Button style={{ marginLeft: "1rem" }} onClick={resetAll}>
              Clear all
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100vw",
            }}
          >
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              interval={null}
            >
              {!filterClicked
                ? data
                    .slice(1, 11)
                    .filter(function (item) {
                      if (chosenCompany === "all") {
                        return true;
                      } else {
                        return item.company === chosenCompany;
                      }
                    })
                    .map((element, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <Card
                            title={element.jobTitle}
                            company={element.company}
                            description={element.description}
                          />
                        </Carousel.Item>
                      );
                    })
                : data
                    .slice(1, 10)
                    .filter((item) => item.posted <= 7)
                    .map((element, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <Card
                            title={element.jobTitle}
                            company={element.company}
                            description={element.description}
                          />
                        </Carousel.Item>
                      );
                    })}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}
