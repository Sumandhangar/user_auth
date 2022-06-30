import React from "react";
import OnHoverScrollContainer from './CustomeScrollDiv';

const Computers = () => {
  return (
    <div className="custome">
      <OnHoverScrollContainer>
             <div className="p-5 " style={{width:'1400px'}}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                tortor neque, vehicula sit amet odio quis, dictum tristique lorem.
                Phasellus mattis, nibh in volutpat consequat, diam lectus tristique
                purus, vitae mattis enim metus sed nulla. Sed et risus blandit,
                posuere arcu eu, bibendum eros. In hac habitasse platea dictumst.
                Vestibulum id elementum mi, ac bibendum ipsum. Phasellus venenatis
                enim nec arcu ullamcorper, eu vulputate augue imperdiet. Nulla
                sagittis egestas mi non mollis. Aenean dapibus in nulla eu elementum.
                Nam non nisl malesuada, suscipit massa euismod, pretium ligula. Nulla
                in porta nisi.
              </p>
              <p>
                Fusce sit amet nisi ultricies, varius magna semper, semper mi. Ut
                faucibus, dolor non rutrum dictum, ipsum urna aliquam augue, non
                egestas odio mi vitae purus. Etiam volutpat ut magna ut tristique.
                Vivamus a tempor ex, eu egestas lorem. Nullam pulvinar, sem sit amet
                scelerisque porttitor, metus elit eleifend libero, vel tincidunt nibh
                nisi sed eros. Ut quis quam ut nulla commodo commodo. Morbi ac felis
                id ligula maximus iaculis. Nunc malesuada placerat purus eget
                consequat.
              </p>
        </div>
      </OnHoverScrollContainer>
    </div>
  );
}

export default Computers
