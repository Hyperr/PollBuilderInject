console.log('v 0.2');
var doEmbed = PollBuilderInject.map('body.collection', '.product-index', function(item)
{
	var img = PollBuilderInject.absoluteURL( item.querySelector('.reveal > img').src );
	var lnk = PollBuilderInject.absoluteURL( jQuery(item).children('a').attr('href') );
	
	var dragger = jQuery(item).children('a')[0];
	dragger.setAttribute('draggable', 'true');
	PollBuilderInject.addDataElement(dragger, img, lnk);
	
	var button = PollBuilderInject.defaultButton(img, lnk);
	var s = button.style;
	s.position = 'absolute';
	s.right = '50%';
	s.top = '50%';
	s.transform = 'translate(50%, 50%)';
	s.zIndex = 2;
	dragger.append(button);
	
})
var pollBuilderOptions = {
	addButtons:'.poll-builer-add-button',
	builderOffsetX:'20px',
	builderOffsetY:'20px',
	buttonOffsetX:'20px',
	buttonOffsetY:'20px',
	buttonImage: 'data:image/png;base64,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',
	buttonImageHover: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACgCAYAAAClika/AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8wNC8xN9pq1EsAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAALdklEQVR4nO3dMW/i2BoG4HeiW+I/YIqdDheDdEfC9SqkmNJczW4HRehwwXZhpKXMSpOUKTzdUJgyq4vLFMlqaiPdlWhMN1PgP2D63IIcLyQBDDgxfH4fKRoFHM+ZzOvD8bH9nTf39/eYVy6XawBqAN4C+BlE++cbgO8ABqPRaDD/xhsV6HK5/G8AAwA/vXbriHbwA0BtNBr9DTwE+iHM/8u2XUQ7eT8ajf4+evhmsHJTov03AIA37969qwH4b8aNIUrDf44wOwEkkqB2hNlsBpEEb4/AqTmS4+ej9dsQHQ4GmkRhoEkUBppEYaBJFAaaRGGgSRQGmkRhoEkUBppEYaBJFAaaRGGgSRQGmkRhoEkUBppEYaBJFAaaRGGgSRQGmkRhoEkUBppEYaBJFAaaRGGgSRQGmkRhoEmUf2XdgNfU6/VQqVQWXgvDEOPxGLe3t/A8L6OWUVpyFejn6LoOXddxfHwM0zTR7XazbhLtIJdDjuFwiHK5jHK5jGazib/++gsAYFkWLMvKuHW0i1wGep7v+2i32xgOhwCAk5OTjFtEu8h9oBXf9wEApVIp0faapuH8/Bw3NzcYjUa4vr6Gbdsb/Z3VahW9Xg9XV1cbt/cl9iNB7sfQj+m6vnYbwzDQ6/VQKBTi10qlEkqlEqrVKk5PTxFFUaL9PD5J3UZa+5GAPfQDTdMAIB56rNLpdFAoFDCdTvHbb7/hw4cPuLy8BDALdqPReNG20nIM9INqtQoAmEwmK7czTTPuDdvtNu7u7hCGIVzXxZcvXwAAjUYjPkDodeUy0JqmwTTN+Ovq6ioeaqybi1bBH4/H8bhbcV0XAFAoFGCa5gu0nNbJ5Ri6VCrh69evT17v9/tPQvqYYRgA8Ox2URRhPB6jVCrBMAzc3d2l02BKLJeBnjedThEEAVzXTRRANZRYdtKnXueQIxu5DPRwOMTp6elWP5t0Wk/15PS6cjmG3sV0Ok20XZJpO0ofA72hIAhS3Y7SxUBvSPW8y4YU6nX20NlgoDekZjdM03xy4meaZnz1cN1sCb0MBnpDg8EA0+kUhUIBnU4nfl3TtPj78XjMIUdGcjnLsYsoiuC6LlqtFizLgmEYCIIApmnGF2cuLi423m+v11v63mAwSPzwQVr7OVQM9BYcxwEAtFqt+KYkYDYD8vnz562GG6tuLtpkf2nt51C9effu3X3WjXgtuq6jWCxiMpkgDMNU9meaJorFIoIggO/7G50Mqvass669ae1HglwFmuTjSSGJwkCTKAw0icJAkygMNInCQJMoDDSJwkCTKAw0icJAkygMNInCQJMouQr0urp1LD1w+HIRaNM0cXNzs/LmdwC4vr7Gzc0Nqx4dsFwEejKZxJX6lxU0r1ar8TZ8wPVw5SLQYRjGVUVrtdqz26iKocPhkM8DHrBcBBr457GpSqXypASBruvxo0uq4CIdptw8U+j7PsIwhK7rqNfrC4sDqcr7YRgmLrConvJWD8eOx2Pc3d3FB8461WoVjUYDURSh3W4vvKfrOv744w8AwO+//77ysSnDMBaePp/n+378lRe5CTQw66XPz89hWRYuLi4QRRE0TYvXVUkaxjQq+K+qul8sFuP3isXiykBrmrZ0P5VKBa1WC57n5WZ1r9wMOYBZ7WdVm06NmWu1WlyNP2nvvK8V/C8vL9FsNtFsNtHtduPzBsuycjNzk6tAA/+MkdVsR71ej19PMruxzxX81ZPnvu/D8zycnp7Gvbsq1C5d7gI9GAwAzMap85X71evrHFoFfxXovJT3zV2gwzCMqwcdHx8DmA1FktarSFLBf367LGmaFh+weTkxzNVJodLv9xcusPT7/cQ/u88V/OcPIk3TYNv2xp9Ahy6XgQ6CIF4LZdPCivtcwf/s7OzZ17vdrviKSUouAw3805NueplbVR5Nuv8sTadTtNvt3Aw3gByOoXe1zxX8m80myuUyPnz4EB94+zCWf00M9IYOoYK/mkYEZldB83RbLAO9obQq+K9bsVbZ9sBwXRdhGD4pzC4dA72htCr4q+k9AE9uaVVXGtUaituIoii+lJ+nK4W5PSncVloV/IMgwHA4RKVSwfn5OWq1WrwfNZOy61Sb53mo1WqoVCrodDr45ZdfdtrfIWAPvQXHceLL3KVSCZZlQdd1TKdTdLvdxLMK7XY7vt+iUqmgXq/HYe73+1stbfFcW4HFiyyS5bbgeRrV/Het4K8YhoFSqRTvJwiCjdqkhhPLDqRqtbp12w5NbgNNMnHIQaIw0CQKA02iMNAkCgNNojDQJAoDTaIw0CQKA02iMNAkCgNNojDQJAoDTaJkfoO/bdtotVprt2s2m7l6epm2wx6aRMm8h55XLpezbgIdOPbQJMpe9dDbSruKfafTebbuRhAEiZ/zW7fiFjB7CFYVjnyObdvx41XPVfK/urqCpmlwXXdlbetlbZlMJhiPx7i9vd3okS9VN0890BuGIXzfh+M4mZccExHotKvYr6qun1SSn193kM3XorZt+0n7VfVU3/dXBnrV7waY1cRL+lCuruv4888/F8qhqdXFTk5O8PHjx0xDLSLQ8y4vL+NaFrqux4/xW5YFz/MS9dQXFxdxnQ1V0FEtYbEpz/OW9sJJi80AwMnJydZtaDabsCwrrv/RbDYBzA4Y9cR6vV5HEAQrPzGA2YGlVi/4/PkzfN+HaZr49OkTCoUCPn369GTNmNckLtDq6WvF8zzc3NxA1/X46eck+wAWCzpuO2WoPo53VSgU0Gg0Eq8DM0+Fbv579afjOLi+vkapVIJt22sDrYZiruvG26o/z8/PcXx8DF3XM+ul9+qkcDQaPfu1q0OvYq8Cs2zR0F2pg0QtPLqKKn/2uAya53n48uULfv3110yHHHsV6JcgoYq9WnVg1Uq4u5j/vRSLxZXbqhJmtVrtyeJIjuNkvmjpXg051NhuF/tWxX5ZXbmLi4vE//mGYcBxHFiWlWhYsKn5cfm6HtpxnLgo5dnZGer1Ovr9PgaDwV4UstmrQKfRg+5bFftlH+OblLjVNG2hFp5pmi/2abOuhw6CAB8/foRt2/EJ5dnZGWzbhuu6W43x07RXgX4JWVexHw6Hz/7dm8xwKK7rolKpwLZtnJ6eptG8rYRhiG63C8dx4qFHoVBAq9WCruuZLvIpLtDqJqb5+VLDMDILtJpJSINaE7FSqcTLMSdd8yWpTX5PYRjCcRy4rotOpxNPDWZ5gUXsSaHUKvbq4LBtO7Uxa9LZH13X0Wg0nlyVjaJooVfOsha12EADMqvYq+Wd1fg1DfOrzK7qoQ3DwNnZGWq12t52EKIDLbWKvfrkSSPQ1Wo1vh993eyJ7/vPrl4AYGEKb351gtcmbgz92DZV7NXNSeqj2DAM9Hq9jW5OUlYdSOtuTlpGrSCQVK/XWwi/ullp/h6P6XS6dqz/ePUC0zRxd3e3sOrAcDjMdC5afKCB2bjz69ev8UWWdScsj29OKhQKW9+stOrq27YnqlEUwfO8xBdZHrf9cZBvb28Tn8ip0KsZjXq9Hr83HA4zvY8D2IOC55qmwTAMRFG005GdZhV7wzCeHSNu0sYkw5t1qwesWmVA/d6A2dzwqn/XsrbssnqBpmkwTROGYWAymcD3/cxvHQX2INBEaRJ9Ukj5w0CTKAw0icJAkygMNInCQJMoDDSJwkCTKAw0icJAkygMNInCQJMoDDSJwkCTKAw0icJAkygMNInCQJMoDDSJwkCTKAw0icJAkygMNInCQJMoDDSJwkCTKAw0icJAkygMNIlyBOBb1o0gSsm3IwDfs24FUUq+HwF4/eVViV7G4M39/T3K5fJ3AD9l3RqiHfwYjUZv1UlhLdOmEO2uBjzMcoxGo78BvAfwI8sWEW3hB4D3DxnGm/v7xSVWyuVyDbO0vwXw82u3jiiBb5hNZgxGo9HCOeD/AQ9rQa46p+Z+AAAAAElFTkSuQmCC',
	buttonImages2x: true,
	buttonStyles: '',
	builderStyles: 'box-shadow:1px 0 1px #000,-1px 0 1px #000,0 1px 1px #000,0 -1px 1px #000, 3px 3px 3px rgba(0, 0, 0, 0.15); border-radius: 2px;',
	zIndex: 98
}
if (doEmbed) {
	PollBuilderInject.embed('k9qDzzl842M0MJlT', pollBuilderOptions, function(){
	    PollBuilderInject.autoHideButtons('.poll-builer-add-button', true);
	})
}
