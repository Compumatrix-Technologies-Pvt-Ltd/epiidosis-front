import ButtonPrimaryUi from "../../ui/ButtonPrimaryUi";
import innovation from "/img/aboutus/innovation.png";

const InnovationAndTech = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-col-1 md:grid-cols-2 mb-5">
        <div>
          <p className="text-3xl font-medium">Innovation and Technology</p>
          <p className="mt-5 pr-3">
            Lorem ipsum dolor sit amet consectetur. Faucibus diam amet ultricies
            sit. Nulla scelerisque eget sit quisque id ullamcorper. Convallis
            lacus commodo pretium odio sit amet. Tempor feugiat pellentesque
            elit interdum. Quam eget sit cum velit quisque felis convallis duis
            malesuada. Quam in pulvinar cursus nisl id.
          </p>
          <div className="mt-10">
            <div className="flex gap-5">
              <p>🔵</p>
              <div>
                <p className="text-xl font-semibold">Equity Financing</p>
                <p className="w-80">
                  Offer shares of ownership in the company in exchange for
                  capital. This can involve selling equity to venture c
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <p>🔵</p>
              <div>
                <p className="text-xl font-semibold">Debt Financing</p>
                <p className="w-[80%]">
                  Borrow funds from lenders, such as banks, financial
                  institutions, or peer-to-peer lending platforms, with the.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <img alt="innovation" src={innovation} />
        </div>
      </div>
      <ButtonPrimaryUi >View more</ButtonPrimaryUi>
    </div>
  );
};

export default InnovationAndTech;
