/* eslint-disable react/prop-types */
const AboutOurCardUi = ({ data }) => {
  console.log(data);

  const subData = data?.iconPlusData?.map((item, index) => {
    console.log(item);
    return (
      <div key={index}>
        <div className="flex mt-5 items-center gap-5">
          <div className="bg-bgprimary p-5">
            <img alt="callgirl" src={item?.icon} />
          </div>
          <div>
            <p className="text-lg font-semibold">{item?.subtitle}</p>
            <p>
            {item?.subDesc}
            </p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 md:items-center p-8">
          <div>
            <div className="text-xl md:text-3xl font-semibold ">
              <span>{data?.title}</span>
              <div className="bg-primary h-1 ml-2 mt-2  w-[8rem] "></div>
            </div>
            <p className="mt-3">{data?.desc}</p>
            {subData}

            {/* <div className="flex mt-5 items-center gap-5">
              <div className="bg-bgprimary p-5">
                <img alt="callgirl" src={callgirl} />
              </div>
              <div>
                <p className="text-lg font-semibold">Core Services</p>
                <p>
                  Finance companies typically offer a range of financial
                  services such as lending.
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-5">
              <div className="bg-bgprimary p-5">
                <img alt="callgirl" src={hand} />
              </div>
              <div>
                <p className="text-lg font-semibold">Core Services</p>
                <p>
                  Finance companies typically offer a range of financial
                  services such as lending.
                </p>
              </div>
            </div>
            <div className="flex mt-5 items-center gap-5">
              <div className="bg-bgprimary p-5">
                <img alt="callgirl" src={paper} />
              </div>
              <div>
                <p className="text-lg font-semibold">Core Services</p>
                <p>
                  Finance companies typically offer a range of financial
                  services such as lending.
                </p>
              </div>
            </div> */}
          </div>
          <div>
            <img alt="investment" src={data?.mainImg} className="w-[50rem]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOurCardUi;
