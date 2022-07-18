import React from "react";
import "./prodList.scss";

const ProdItem = (props) => {
  const {
    Link ,
    Img ,
  } = props;
  return (
		<div className="c-prodList__prodInfo c-prodList__prodInfo--vertical">
			<a href={Link.Url} className="c-prodList__link">
				<div className="c-prodList__flex">
					<div className="c-prodList__head">
						<div className="c-prodList__img">
							<img src={Img.Src} alt={Link.Text} />
						</div>
					</div>
					<div className="c-prodList__itemBody">
						<div className="c-prodList__itemTitle">{Link.Text}</div>
						<div className="c-prodList__itemPrice">${Number(Link.Text1)}</div>
					</div>
				</div>
			</a>
		</div>
  );
};

export default ProdItem;
