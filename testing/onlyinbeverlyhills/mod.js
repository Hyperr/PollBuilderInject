console.log('v 6');


var doEmbed = PollBuilderInject.map('body.collection', '.thumbnail', function(item)
{
	var img = PollBuilderInject.absoluteURL( item.querySelector('img.primary').src );
	var lnk = PollBuilderInject.absoluteURL( jQuery(item).children('a').attr('href') );
	
	var dragger = item.querySelector('img.primary');
	dragger.setAttribute('draggable', 'true');
	PollBuilderInject.addDataElement(dragger, img, lnk);
	
	var button = PollBuilderInject.defaultButton(img, lnk);
	var s = button.style;
	s.padding = '0px';
	s.backgroundColor = '#F36271';
	s.position = 'absolute';
	s.width = '132px';
	s.top = '10px';
	s.left = '50%';
	s.marginLeft = '-65px';
	s.fontSize = '12px';
	s.cursor = 'pointer';
	s.fontWeight = 'bold';
	s.textTransform = 'uppercase';
	s.letterSpacing = '1px';
	s.fontFamily = "'AvenirLTStd-Light' !important";
	s.borderRadius = '3px';
	s.lineHeight = '25px';
	item.append(button);
})
var pollBuilderOptions = {
	addButtons:'.poll-builer-add-button',
	buttonImage: 'data:image/png;base64,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',
	buttonImageHover: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTIvMTMvMTftQtRrAAAgAElEQVR4nO2df3gb1ZnvPzOyLGtsR7ElJ3HiHykFx4aWGBzaTUpCaNKSPkvaJHRhdzGL2YJzoT8IF+59tnB7l7Y37NO9sA3dXdqY7cVcnOcubBtCw3YTSmh+sEl3wa3TUuyk/PCvxMSWnSi2R5Jlje4fIymyPDOSbMmW4/k8jxDRnJk5tr965z3vec97hFAohEnydNQ3Lge0XoTfK1O8ZBfQGf7/zvhXdUtT5+RTTPQQTEHr01HfuB6oDb+WAzfNUleOoAq8DWirbmk6PEv9yHpMQYfpqG9cCKwPv2qZPfEmyxFUgR8GDle3NF2Y3e5kB/Na0B31jbWoAt5C9gs4EUeAfajibpvtzswW807QYRE3oIo4VX93rtCFKu7m+SbueSHo8ECuIfy6XEWsRxfQjCruztntSua5rAXdUd+4BVXEX0rndXOKi8hbXoFt6RKsixeRU7QQS0E+os2GYLUi5lrBYgFACL9HURRCoZD6Pj6O4vURHJUJyjLjQ+cJDLgZ+6gff88ZAoNDoCjp7PorqMLel86LZhOXnaDDg7sGYAfTtMYWSSLvyo9hv/IKckuXkLtEFa9os4EgIFhEEEVAQBBA/c8UCIVUkUdfEFKCKF6fKvLBIfy9Zxl9px3vex+kQ+RdwC5UcV9Wg8nLRtAxbsUOwDGVa4j2POwfv4L82k8gVV1JjrMYMc+GIIogWhBEVbBy+2n1vSP83n4KgOCojL+7N6V72irKsORLAEg1K9T36qrwv9X3kBKCkAKhEEogQKDvHN4POhlpPYn3vfdRfP6p/LgAHi4Ju3OqF8km5rygwxZ5B/DXqZ4rWCzkli6hoG4lUs0KbGVLESU7giiqIhYE5PbTyB2n8XX1EBhwpyzY6WKrKMNa4iKvshypuipG5AooIRSfD19XN/LvOxhuPcnY2b6p3urbwK65brHnrKBjhJyaRRZFcktcFH7qegpWXYdtaSlCTo7qPggCw61tqojbT824eJPFVlGGVLMCqaaKwrpaAELBIKGxAGP9Awz/6i0uvvVrAucGUr10xGLPWWHPSUF31DfuAB4nBSELFpGCVddRtPFm8pZXIFhzEESRgHuQ4daTyB2nGWmdmxGugrpapOoqCutWYnU5CYVCKD4/vvc+4Pzrh5HfPYXiT8kt8QCPV7c07cpQlzPGnBJ0eCp6F7Ay2XOsLieOmz7Dws+uw1KQf0nEb7fhOXY8a63wVLFVlOFYu+aSuINBAu5BPMdO4Dny74x7LqZyuZPAjrk01T4nBB12L5pJIfxmqyjDuXkT+Z+8Botkj7oTnmMn5qwlTpWCuloca1dTeP1KNXji9zP86zbOHziEr7M7lUu9AjTMBTck6wUdjiU3k6R7YStbRsmfbkOqrkKwWlG8Xs6/9gaeo8cJuAcz2tdsxepy4li3hqLPfxZLvoQyNsbo795l4KV9qQwiPaiizuoYdtYKOmyV95FMjoUokldRhuu2L5J/TQ1YLIwPDuJ++VWGW9tQZG/G+zsXECU7hXW1uLZtxuosRhkbQ/59BwM//VkqrtcRYEu2WuusFHQqVjlnoYPFd/0pBdddi5BjIeBWhew5diLj/ZzLONauxrX1VqwuJ4p/jOG3fs3AT15hfOh8MqdnrbXOKkGHrfLjwIOJ2lokiYUb11P8x5/HItlVIe/dbwo5RRw3rsa17VZynE4UWWbo315n6MAvCI0Fkjn9adRoSNZY66wRdHimbx8JIhiCRSR/5SdY9Oe3Yy1xqT7ywUMMHTxkuhZTRJTsFG/aqPrYkp2xfjd9u5/D+4f3kzn9JKoL0pnZXiZHVgg6HI7bRwIXw5IvsbjhTgpXXYeQY2G4tY3+lpfm7WAv3VhdThbV305hXS2h8XE8R44z8JN9BEdGE53qQRX14cz30phZF3R4kuT7idpJV1ez9Kv3krOgkMCAm75nn4/mVJikF6mmitL77sbqcjL2UT8fNe9Rf9eJtfLQbE/GzKqgO+obm4G7jdpYCvIpuX0rjrWrEXJyGDpwCPfL+033IsOIkh3X1s0Ub9pAKDDO0GtvMPDi3mRE/Xx1S1PDDHRRk1kRdLITJblLS1n61XuxlS1D8fk4s+sZ0yrPMFJNFcsevB+LZMffe5YzP9jN2EfnEp02axMxMy7osJgPk2DwV1BXy9L7/xLRZmO4tY2+pmbTKs8SomSntLGBwrpagsMjnPu//8zF/3g7kbU+CayfaVHPqKCTEbOQa6XkT7ZS9PmbEUSRvt3NeN40Q3HZgOPG1ZRubyA0HmTo4KFkXJAZF/WMCTqZsJxlQSHLvt6IveoqFJ+P7p1PXnbJQ3MdW0UZFY8+jGi3I7/zLmf/8Z8IyrLRKTMa1psRQYfF3IZBWM62rJSyR76B1VWMr6uH7ieeMl2MLEWU7FQ8+jB5FWWqX/30jxg71290igeonQlRZ1zQybgZ+Z+oofT+r5CzoBDPseP0NT2f0T6ZpIfSxrtxrF1DcHiE7r/5O/w9Z4yaz4j7kVFBJyPmwhuuZ8m9f4FFsjN04BD9e17KWH9M0s+iO2+neNMGgrKX3r/7B7yn3jNqnnFRZ0zQyYh5weobWPKVuxBtNnPwN4eJDBaDozJnn/knRn/7e6PmGRW1mImLhmkmkZj/0hTz5YDnzRP07W7Gki+x7GuNFNR+0qj5SlRtZISMCDo8A6g7aVJYV8uS++5GzDPFfLkQEbVoz6P0/q+Qf+01Rs2/FNZI2km7oMO5GbrT2fnXXkPp/V9BtFpNMV9mRC21ZGfZ17cjVV9l1PzusFbSSlp96HDW3C/1juddsZyKv3oI0Z5nivkyJupTy156vrcL3wedRs1vTmeWXtosdMzEiSa5pUso/2/fMMU8D5hgqR/8L+QsNMwK3hfWTlpIi6Bj1v9p9jzHsYCyh7+GpSCfoQOvm2KeB3jePMHQgUNYi4so/6uHEHKtek0dqKJemI77pstCP45BRGPpN7aTu7gEz7Hj9O/5lzTd0iTb6d/zEp5jx9VZ4Ie/biTqlagamjbTFnR4QavuGsAlf1mPVHUlvq4ecwZwHtLX9Dy+rh6k6ioW/dmXjZo+GNbStJiWoGPymjUp/sLncNz0GYKyl+4nnprOrUzmMN1PPIXi87Fw/VoKb7jeqGnzdF2P6VpoXb8572OVuG7bjCCKdO980kw0mscospfunU8i5FhYcu9fkLu0VK+pA4PAQjJMWdDhx4NmERgh10rp9nuis4BmCqiJv7s3GvlY+tV7sUiSXtObpuN6TEnQiVyNJXf/ObZlpWotOTOiYRLG8+YJhlvb1HJtt281ajpl12OqFroZHVdjwWf+iAVrPk1Q9tLX1DzFy5tcrvQ1NaP4fDjWrcH+8Y/pNXMwxXyPlAUdng3UzNPIcSxg0Z9uQ8ixcGbXM6bfbDIJRfZyZtczCNYcln6t0Whfmi+FtZYSU7HQunUXSv7sy+Q4FjB04JC5OttEF7n9tDrp4ipm8V13GIk65RofKQk6nEyiOYFiX3ElC/5oVbhY4v5U+2Eyz3C/vJ+Ae5CF69caJTGtTDWBKWlBxxRS1GTpA/ciWCz0Pfu86WqYJEQJj7EEaw6L7rzdKOrxeCoDxFQstO7mPK7bvoi1uCi64Y6JSTLI7afDUY+lLNywTq+ZA1V7SZGUoGN2nJpEzkIHxV/4HMFRmf4Wcz2gSWr0t7yE4vNTdMsGcop0DfGOZK10shZa1zov+rMvI9pyOf/aG2YVUJOUCbgHOX/wEDkLCnFtvVWvWdJWOqGgw7mqmpta2sqWUXDDdQQG3AwdeD2Z+5mYTGLo4CEC7kEWrPk0trJles3+Opm86WQsdIPegZI7tiLm5OB++VVzIGgyZRTZi/vlVxFtubi+/EWjMF5DomsZCtrId877WCVSzYroHngmJtPBc+wEAfcg+Z+8mtzFJXrNdnTUNy4UBIHYVyyJLHQDOr5zyZ9sQcy14t77aqp9NzHRxL13P6LVmsiXbjC6RiJBa1pnW/ky7FVXEhgcMpOPTNJGxEoXXLeS3CWL9ZoZDg51BR1O4aucdEAQcH7xC4i2XNx7zRlBk/TifvlVBFsuRZ+7Wa9JZfud9+mmlxpZ6AatD3OKFlJQey1B2cvwPNli2GTmGG5tQ/H6KPzU9eQ4Fug1a9A7oCnocHhEM6Nu4c1r1bizuY2aSQZQZHUra8uCQgo/vUqv2Zfa77xvudYBPQvdoPWhRZJwfObTIAh4jh5PubMmJsngOXocQRBY+Fnd6XDQ0WhKgs5f+QlyitScDXNW0CRTBNyDDP/6JLmLS7BfeYVeswatDycJuqO+sRatwSDguOkzCBbRjDubZBzPsRMIOTk4v/gFvYmWyvY776uN/1DLQjdonW1dXELeFZUE3IOMmINBkwwz0tpGYMCNVF2FpbBAr1lD/AdagtYMiSz49A2IubkMt56cei9NTFJguPUkgs1GQe21ek0maXWCoI3cjcJVtQiiiOeYORg0mRk8x44jiAILb74xabcjJ67Beq2zbGVLyV2ymIB7MGtrbFhLnORVlGOrLI9+5u/qwdfdQ2DAHMDORfzdvQQG3NjKlmF1FusFItaj7rAGTBa0prtReMP1CLnWtLkbrm2bcW3brHtcbj+N3H6K8wcOJdoDD6lmBa5tm5Fqqgyv5967H7n9lO41Kh57ONq2e+eTCX+Gisceid6ze+dTutc2mR7DrScp+tx68q+9hgtvHNVqsoWYxbRRlyOcWadZCUmqqUIQReSOmVleJdVU4dq2mY/v+hvyYixuPKXb76HisYcNxRy5XsVjD1O6/Z50d9Ukw8gdp0EQjfZtuSl2NUushV6v1VrMzVWTrgUhI9GNiDWOYC1xUVhXiyjZ1Q0eH3uE93d8c5KlLt1+D461q6P/DrgHce/dz8jbbQRlGYskUbCqFte2zVhdToBo+77dz6X950gViyRF3SNFlvF19Uy5nbXEiVSzIvpzKrIXuf2U7jUj51hdLgDdp0teZTmiJE24b2x/4vF39SR8oqbKSGsbgihgqyhDsFoJBQJazdYTromXUND26qsQ8/Iylrcht5+alOTUL0ksf+JbWF1ORMmOVFM14f7FmzZOELPn2IlJIg3KMp6jx/EcPT5B/I61q/F39cz6CpugLLP4rjuwVZQB+m6L67bNFN2yAYAz339mgkjzKstZVH+H7hMq4B6k/4UXNf92jrVrom5fR32j5vmRa8e6YbbK8qh7pkUi924qDLe2kf+Jq7EtK8XX2a3VZD1hQcdGOSYFqQEKVn4SLOKMruaOiDFCvEWI9b8jfzQj+l94ccKAwsh/n0liv4RafbKWOKNiHmltmyBMx7o1LN/5raiY/d29uPfuV59S4XZWl5NlDz2QMVfL390bfsKejgYLIu6dVLMibfeR208jWCzkf6JGr0lUu7EWWtN/zruiUvWfZ3jQY8nXrtMQcUciuPfuT/iYC8oy7r37KW1sANS9qgvramc9W9DX1YN77/7ooNaxbs2EL3JpoypERfbSt7s5+rlUsyL6s4BaLy4+tyavspyKxx5BlOw41q4mMOBOe7rvuRdenKCL2HsuvusOPnz0O2m5j9x+CsEiIl1dzeCrB7WaRLUrQrRe3STEPBu5pUsAZjRcl1dZjmPtmui//TGPWenqid/8ZJOk4tvFX2e2cO/dH/3dLq6/I1pwpbCuNmp9+3Y/N+FLG2vN+1te0vwd+Lp6JkRrijdtNCrmkhZ8Ma5cxJVKB/7uXhAEcpeVItpsmm0iGo64HJruhv3KjyPacjPqbkTCbpFX2UMPsHznt6JW2N/dO8GS2iouuR+p9iu2fex1ZpuI6yFKdly3bcYiSSy66w5gsquRV1keFXrAPWg4FvB19UTzbkTJjmPdGt226cJa4srIdeX201gkidxlusXSa+GSy6EpaOnqKhCEjIbrpJoqw0FNNkQkMk2s61F0ywZEScLqck5yNYAJvmkyX2i5/VR0QCzVVGVsMGyRJBzr1kTvle6ImNxxGvuVV2C/8gq9fQ8nCHq5Vgtb2TIEUTQM/6SbSMhpuLVtXuVcu/fup3DVddgqyiaEF+PHB7Hjh8CAO+F1Y2dJxTS7HHrRjoB7kHMtxgP1VPF19YBFNHJllsMlQWsOCK0uJwhCUr+4qRIZmSeL3H4qatETTajEE9s+G2f2zr3w4oQZy9ketKaKIntx792P5+jxtMejVQ0K5C7SLXFwE4BoVI0mp7gImNkBYSL8cU+LZP3C+Hbx18kGYr9kel84f1wcOhGxbfzd6f2Zu3c+RUd9I+cPHgLUp4fcfirtYgZVg4IokFOkvyttR33jchEddyNnoQMxN7MDwqkQv1om2ZhyfOx6rlm/CLF/D6lmRcLIRUHdpeGR/G5mnkrun+6Pri/NZHqB3H4ay4IFiPY8vSb6gs5bXgEC6ivLiJ1IsbqcCX+JpdvviU4Lx58/1wjK8oTIRSQaooVj3ZoJEZHYL3HsF6OwbnJMwCJJ0XMTDfCCsjwhXFe8aWOSP03qCBaR3MWL9A4vz0FH0LmlS0Cc2RnCZBlubcNz7MSE6WyppiphLgeo0+RG1tla4jS0+lr+fqxw4onPVUkH/S+8iFRThdXljP4O+l94ccKjvnjTRhbV3x7995nvPxPXr1P4u3uxVZSx6K47CLgHJ+RrLHvoAUD1i4dbf5OwT+69+3GsW4PVpf7+MuFHRyIdtopyvSlwA0Hrx/uygr7dz6HIcnRq2OpyqrNn2mkJQHID0MgfxOga8cTmlWi1T7egg7LMme8/Q+n2e6JREcfa1VHjoyYVqdEQRfbSG5cDEqFv93NUPPYIVpeT5Tu/pXn+uZYXk84nj8zGRp4cGQm5CgJ5lWV4tI8a+9AgZGU0IMK5F16ke+dTCR+JI61tdD723cuq0pOvq4cPH/0O7r37o2OKSExflOxqfYuDh3h/xzd1/4a+rh4+fOw70d9f7Pn+7l66dz6VUujUc/R49EuhPjXTOxsrt58CUSBnoW7t8+VC+533HUYjbFf57W9iv2I53U88lZVuRzwRny9+xYrcfjojo+5sIzYd1CgdVY/YtNCA252Vq3ykmirK/+q/Ir/zLj3/+wdaTY7ouhwWu/rICY7ODTEEZZnhuGni+URgYHBaIgzKclY/jUHVoiCAkKedz0HY5dBcFCvkWoHsikGbzG8iSUpibq5ek0rdYo2C1ZqZXpmYTBODOLR+9VFBnOo24CYmmUWwWHSP6avWYgraJDuZkqAFBKPNW0xMZg8DXeoL2qbreJuYzCpTczmyMYnDxCQBuoJWvGZ1fpPsJBQM6h7Tt9CKAqFQJvpjYjI9DHRphjJM5hwhRdE9pivokGmdTbKUKbkcoTHNGmImJrNLKITi8+seFoEurQOKzwekt2CIyeWDVLMi+popIlpUvD69Jl05QCcaCUrBkVEIhXRLcqUDtY5DasVP+ltenJAaqRY81F8sGkmlHGltM0ypjBQ+1LtPMvdKpr/x9wHtgpWZ6p8/XAA+UXVSLRzr1lC8aaOmkfN39zJ04PWMlp6w5EuEQpeMrQad8QXPowRlOeN+tNXlTLkUQXxtCVtFecJrFNSpS7H83b307X5O8w8pxqyh07pPsvdK1N/4+wDRCp9G6Zvp6l/s8YB7EM/R4wm/TBZJouJ/PGL4tLZVlFHa2EDxpo10/68nM5iDHjKy0IioFnoS40PnIRSa0UdKprFVlFHx2CNJLf+faRYbLHbNFJHlZh974n8a/k7ixRxwD3L+4KEJlU4j+DJQIzqCVLMClBDjFy7oNemMuByTCAy4YYYDHd07n0rYxqiehtZ2EnmV5TjWrYmuPRQlO4vq70hq2wnDfnT3ci6J1ePJ1v+wVZTh2rY5bcvEtPqnrmpxRis0xd674rFH6N755KSnl2PdmglttdZlWkuclDbeMyOl20IhBX/vWb3D+oIe6zunWujq1B6x0yETKyZ8XT34wn/YiKilmiqsJc7prfAYTc8KD0X2RhekFm/aiOfY8bQsf9LsX7v65t67Xy3Ju70huiJelOwse+gBOh/97gQLG1viILJLQjyBgUHOfP+ZjC91k6qrQFHwfagZxwDo1HU5fF09hBT9eN9cY/jtiY/GyPq72Sa2eKIo2aM1oTON3H6Kzke/Gy0QA6oLUrRpw4R2sb660RdtptZthoIKYx+d0zusL+jx8xdQ/GMpD4KyFUtMkcNsQm4/HS2lBerTQ6vwSyYIyjK9cfU6jIrESDVVszr+kGqqUEZGjeZIOsXqlqZOzUOhEOMX1OoHcz0WbZEkXLd9ccJn2VTbLraUFqiVnjJdnDyC3H5qQmk1dU+bS4GA+EFfxWOP4Fi3Zsb6F8FWUQahEGMGhUOrW5qiYbsjaJQyCPQPkFe+DGuJa0YWyyaKqCRanm/JlyZdI7LVQ3z1pOk+IhNVWIJLYbFEBGWZcy0vTtgyw3Xb5qQGnelAbj89oVhOXmV51P/2HD2Oa9vmqJ+vukUN0HipGHukWlUmsZa4CCkKgf4BvSZH4FI53U40BO3v6qHgumvJqyyfkQ3rjXZXgsSbYqqjdeNr+Lt701LbLlGFJVD7m8qWGY61l0qKFd2ygeG322aktEB8ueTYGtRBWaZ755PRvVNiKairVYtBNqpGIr4cWTrJqywHJWQY4YBLuRyaah1p+x2EmNFIR6aI1C7ObNB/evQ1TQx5zUZsWotIhSXPsRMTXKNYHGtXs/yJb2XMx5aqqwgpQaPdJNrgkoXWFLSvs5tQIDBjA8NEMVidvZ4nHI9YxNhYqyJ7NTfvnA7JxKGVFO8XGBiMbk0B6Y9N6xGf3qAl2sCAGmPuDxfBLIxY5xgilWDTtftVLFJNFYGh84yd/UivySVBV7c0HdbbfNF/tg/7xz+GraIs4370dP9wEUGA+riPuB+Z8EnTFYeOJ7aKJ1yKTWeS+HGH0TgldkNTiyRRtGnDBNfLVlGW9i3zogPCvo8IjY9rtqluaToME9NHj2g19J76AyFFmXNT4HL7qQl+f9EtG7JyyluL2I2CMh2blmpWTIhiRfa4SYbI/o/9LS9N+Fxv6+Tp9DGkKMgdf9BrEtVurKC1/eiT70BQmZPx6PiNa+Kz3LKV+C9jJFKTbiySNMlPn8ouWZneZlqqqSKkKIyefEevSfSXFSvow1otfe93ovh8MxbsTyeBgcFotXvInDAyQd/u5gm+rFEN6qlgLXFqJx0dOKTZ1ijuHH8s0VgnVQrralFGRo1c3sOR/8nR+jAWxe/H191L/tUrKKirnZHwXTpx7/3ZBDG4tm1OS9xUK+atxVRK28Klx3lsFf7pYi1xkldRTsGq6yZ9QRTZq5mPYZEkyh76KoBu6m38thjpHFsU1NVCKIT3/Q+Nll4djvxPVNDVLU0XOuobNSdYRn/7DlL1VUjVVXNO0IEBNdUxttJ/0aYN0x6AJhPzhsSxcyOGDrxOQcwWyakg1VRR3dKUVNuAW00uihdrXmU5yx56IDpAXb7zW3iOnWDk7d8QlL1YS5wTYucA5w8eSmttaam6ilAoxOjv3tVrcqS6pSmaTxq/pnCf1hkjv/4tocA4havmntsBk6eWXds2Yy1xGpyRPfSneQPLWCKx+c5Hv6tpebVqTjvWrmbZQw9Q8djDlDY2TBCzv7sX90/TG2IsXFVLaCxg5D9P0Gy8oA9rnTH20TnGzvVjdRbPybyO2F2aIsxUVtt08XX1TEhemi7+7l48x07Q19TM+zu+iXvvfl33KzJL2NfUbBiyzdSkla2iDKvLib+7l8DgkF6zw7H/EOKXWXXUN3aiscaw+AsbKbljG+d/cZj+PS/FHzaZB0R88NiwXCZ2+Yqw6M7bKfr8zZx7bg8XDr+p1aSrZs+zy2M1rLWmcB/wYPyHw2/9BtfWzRTWrTQFPU+JuCAzte1HYd1KFK+P4V+f1GsyyUXWqsvRrHVmwD2I98MurC7npClPE5N0U1BXi9XlRP59O8GLw3rNmuM/mCTo6pamNnRqdVx47Q1CwWDaY6ImJvE41q4mFAwy9G+6kzZdNXuenfSo0Kuc1Kz14ei7HQSGzlN4/coJ+cUmJunE6nJSeP1KxvrO4X3vA71mzVofpiRoxevDc/hNQqH0z1yZmERwrF1NSFG48MZRo2bNWh9qCjq8LOsVrWMXfnmMkN9P0S0bJiV8m5hMF1GyU3TLBoLDIwy/rbvH+Cs1e57t1Dzf4NrNWh8GR0a5+Ku3sORLczK/wyS7KayrRbTbuXjireiaVg2a9Q7oCrq6pWkfOoPDoQOHUPxjuLbemkpfTUwS4tp6K6GxMYb+7Rd6Tbpq9jyrOaMNiQue79L6cOxsH/K7HVhdTtOXNkkbjrWrsZa4GP7PVsbP65b70tRkhESCbgY07f7AT15BGQuYVtokbbi2bUYZG2Nw/wG9Jh4M3A1IIOiaPc9eQOcb4e/uZfS375hW2iQtOG5cjdXlZPhXbxtVRtoV1qQuyeyx0qx3wP3Tn6GMqb60GfEwmSqiZMe17VaCI6O4X37VqGlzwmslahAOj3xb65j/TB/Db/8Gq8tpWELKxMSI4ls2kON0cuHwm0arXb6tF6qLJdldsHah50u/+DKKf4yiWzaYs4cmKWN1OdW4s8djFNnwkGAwGCEpQRv50uPnL3D+9cNY7HlpXS5kMj9YVH87oj2PoYOHjJKQEvrOEVLZp9DASu8l4B6kcIrLhUzmJ5FKq2Nn+vD8UjPfGVKwzpCCoMPfkMf1jp995scogQCl991tDhBNEhIp+qiMjXHuhX82WunyeLLWGVLcSbZmz7O7AM1sa+97HzD8q7fJcTpxbTUuYmhi4tq6GauzmPO/OIzcrluv7mRYc0kzla2Rd+gdGHhxL4GBAYo3bTBdDxNdpJoqijdtwNfdi/unPzNqqqs1PVIWdM2eZw+jk4k37rlI/55/ITQ+zrIH7zddD5NJiJKdZQ/ej+Lz89GPXyAU0K3G/0pYa6ldf4r9akBngDjS9jvOv/ZLLPlStIC3iUmE0t29rTEAAAk8SURBVMYGRLud8wcPGW3+40HVWMpMSdBhJ137hqEQ/f/8U3zdvRTW1eK40ZwWN1Fx3LiawrpafB924n7l50ZNG1IZCMYyVQtNOIVPs2IpoRBn/76JoOyldHvDnKzlYZJebBVllG5vIDg8wpmnf2TkahwxSg9NhKGgQ6GQ4QvYgo7rMfbROQb+308IBYNUPPqw6U/PY0TJTsWjD6MEApz90f8xSg31AFsS6U5Dh5fuNZ2OhmuKNegdv3Dk39VZxPAPZDI/qXj0YUS7nQu/+CWjv/29UdOG2Dp1U2FagoboypanNQ+GQvTv+RdG32knr6KM0sa7p3s7kzlGaePd6qZTvznJwEsvGzV9OqylaTFtQYd5HJ0JF0Ihzj7zT/jPfoRj7RoW3Wnme8wXFt15O461a/C+9wFn/343oaCi1/QkBrPQqZAWQYcfE7r+dHBklN6/+0fGPRcp3rTBjHzMAxw3rqZ40wbGzg1wZtcPjcTsAbZM19WIkC4LHSl9sEXveKB/gJ7v7SI4Mkrp9gZT1JcxjhtXRyMavU/9A+Oei0bNt+juZjwF0iZoiO5E9JDecX/PGc48/UOCXq8p6suUqJhHZXr+9mnG+nS3YQN4KLJ7VbpIq6ABqluadgHP6x2XO/7A2R/sRvH6TFFfZkTF7PVyZtcz+Dq7jZo/H9ZKWplUHzpddNQ37gO+pHe8oPaTlN7/FSySnb7dzXjePKHX1GQOECvmnu89je/9D42av1Ld0qTrnk6HtFvoGBrQi3yg5nz0/fDHpvtxGRDrMych5pNMMU8jGTJmoQE66hsXom4ZsFKvTf411Sz9WiOWgnyGDhwyi6nPMRbdeTvFmzYw7rlIz98+nWi34ZPA+nRFNLTIqKAhOVHbq65k6VfvxVpchOfYcfqadF1wkyyitPFuHGvXEHAP0vO9p43qacAMiBlmQNAAHfWNy1F3+3TotbGWuCj/798gd8lifF09dD/xlOYm6iazTyQ3I6+yHO97H3DmB7uN8jNAjTXXpjM8p8eMCBqiot6HgaUW7Xks+/p2pGtqULxeup94KtEjzGSGUfdnfAQxL4/ht1rp+9FzuhvKhzlJmmPNRsyYoCE590OwWnFt20zxpg0IOTlmBCSLiAz+QuPjDP7ra7h/orlwKZYZcTNimVFBQ3KiBrVO8JL77saSLzHc2kZfU7PpgswSkRXahXW1jJ+/QN/u5xj9fUei02ZczDALgoaoqJsxiFMD5C5ZROn9XyFveSWK18uZp39otELYJANINVUs2/EAYl4e3tN/4Ow/PJtoKhvUNafTTgWdCrMi6Agd9Y3NgGFOqZhnw7nlVoo+tx4xN5ehA4dwv7zftNYZRpTsuLaqrp/iH2PoXw8mKqQY4fnqlqaGDHdPl1kVNEBHfeMO4PuJ2tmvuoKlD9yH1VVMYMBN37PPm9Y6Q0g1VZTedzc5TidjZ87S9+MXEk2WRHgoE9PZqTDrggboqG9cjxoB0Q3rgTpgXHzn7TjWrUGw5jDc2kZ/y0tGFStNUsDqcrKo/nYK62pR/GOcP3iIwVcPoHh9iU6NpIAeznwvjckKQUNyYT0ABIH8a6opuWMbtopyFK+X86+9wdCB1003ZIqIkp3iWzaoO5vZ8xg700ffs88blRmIZUbDconIGkFDdLD4OBp7jcdjKcjHcdNncP7xLVgKCwgMuHG//CqeY2aILxUca1fj2norOU4nwZERhn7+GhcOHUHx+ZM5/Wng8dkY/OmRVYKO0FHfuAU1CmLoggBYFhRS8idbWLD6U4i2XFPYSRIRstXlJDgqc/H4fzC4/4DRVmqxeFCjGNNeA5huslLQELXW+4CbEjYWBHIXL8K19VYKVtUiWq0E3IO4X36V4dY20xUJI0p2Cq+vxbXtVqwlLhSfn4sn/pOhn/8iUR5GLEdI45KpdJO1go6QirUGNSfEteWPKbzhegSbLepje44en7eDR6vLiWPdGoo+/1lEu51QYIyLJ95i8Gc/JzCQ9O8ka61yLFkvaEh+IiYW6+ISijbezII1n8JSUIAgCgy3tuE5doKR1raM9TWbKKirxbF2NYXXrySkKASHR7h4/D85f+gIgQE3JP+3n7WJklSZE4KOEA7v7SJRJCQGS0E+C1Z/iqJNG7A6ixEsFgIDboZbT+I5dvyyS36yVZThWLuGwrqVWF1OQuNB/H0fceGXRxn+1dsER0ZTudxJYEc2hOOSZU4JOkJ4MuZxknRDIuRfew3FmzZiv+rjCLlWBEEg4B5kuPUkcsfpOWu5C+pqkaqrLolYUVBkL3L7ac4fOoz39PuJMuLi8aBGL2Z1kmQqzElBQ9QN2RF+JS9sQSBnoYPCVddR+OlV5FWUIVitIIpRt0RuP43cfiprrbetogypZkV0jxIidd78Y/g6u/AcPcHIyd8RHB5J9dKR/Ux2zQX3Qos5K+gIMcL+66mcn+NYQOGn6iio/SS5ZUuxFOQjiBYEi7rcUu74A3LHaXxdPQQG3DMucltFGdYSF3mV5UjVVerOCJEihUGFoNeLv6uH4dY2Rt7+TTKJQ3p8mzks5AhzXtARwjONDaRqsWMQbTZsZUvJv/Ya7CuuxLa0FFGSQBQQRBFBFEEQojkkckf4vf0UAMFROWXB2yrKsORLAEg1K9T36qrwv8PiVRRQ1HfF68Xfexa5/RQjbb/D33MmlcFdPBGL3JwtM33T5bIRdISwxW5AFXbldK4l5OSQu3QJ0oqrsFWWk7uoBKuzGLEgX7XgooggiCAAggAI4Tch+ZuEQqoeQ8oly6uECI2PExwZIeAeJHBuAF9PL97204x91E8oGJzOjwXQxSUhz2mLHM9lJ+hYwjHsBlII9yWDRZKwLlmErXwZuYsXkVNcRM6CQsQ8G0JuLmJubtgvD1v2nJwYsSqExoOgKCh+P8FRGcXnQ5FlAkMXGDvbh+/DLsbODRgVBZ8qr6CKOKtjydPhshZ0hBh3pIFpWu05SBdqDP+ycSuMmBeCjqWjvrEWVdhbuHzF3YWaNtBc3dI0N2ORU2TeCTqWsLjXo4o7cc5IdnMEVcSH55uIY5nXgo4lPJhcH37Vkv0CP4Ja6+Qwqogvq8HdVDEFbUB4qr02/FrO7In8CNCJKuC2uTQVPdOYgk6R8ABT60X4PVW/vAtVrITfJ7zmw0Aunfx/ixa45sJPPjgAAAAASUVORK5CYII=',
	buttonImages2x: true
}
if (doEmbed) {
	PollBuilderInject.embed('vCCegsg0IGJ4URj4', pollBuilderOptions, function(){
		PollBuilderInject.autoHideButtons('.poll-builer-add-button');
	})
}