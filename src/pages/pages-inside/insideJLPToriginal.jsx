import React from "react";

function InsideJlpt() {
  const { id } = useParams();
  const [testData, setTestData] = useState(null);
  const [activeUnit, setActiveUnit] = useState(null);
  const URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getTestData = async () => {
      try {
        const response = await axios.get(
          `${URL}/jlpt/api/jlpt-tests/` + "N" + id
        );
        console.log("test data", response.data);
        setTestData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    //awake function
    getTestData();
    console.log("test", testData);
  }, [id]);

  return (
    <div className="bg-[#FCFBF8]">
      <div className="m-4 mb-16 lg:m-16  font-kanit min-h-screen bg-[#FCFBF8] overflow-x-hidden">
        <h1 className="text-center lg:text-left text-3xl mt-24 font-bold mb-4">
          ข้อสอบ JLPT N{id}
        </h1>
        <div className="divider"></div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* div ซ้าย */}
          <div className="lg:col-span-2">
            <p>details</p>
          </div>

          {/* div ขวา */}
          <div>
            <div className="flex flex-col gap-5">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  {/* ข้อสอบ JLPT เก่าทั้งหมดที่มี พร้อมเฉลย {testData.name} */}
                </h3>
                <ul>
                  {/* {
                // testData.map((item)=>{
                //   console.log(item)
                // })
              } */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default insideJLPToriginal;
