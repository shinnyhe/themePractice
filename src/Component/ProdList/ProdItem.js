import React from "react";
import "./prodList.scss";

const ProdItem = (props) => {
  const {
    imageSrc = "",
    imageAlt = "",
    link = "",
    title,
    price,

  } = props;
  return (
		<div className="c-prodList__prodInfo c-prodList__prodInfo--vertical">
			<a href={link} className="c-prodList__link">
				<div className="c-prodList__flex">
					<div className="c-prodList__head">
						<div className="c-prodList__img">
							<img src={imageSrc} alt={imageAlt} />
						</div>
					</div>
					<div className="c-prodList__itemBody">
						<div className="c-prodList__itemTitle">{title}</div>
						<div className="c-prodList__itemPrice">{price}</div>
					</div>
				</div>
			</a>
		</div>
  );
};

export default ProdItem;
