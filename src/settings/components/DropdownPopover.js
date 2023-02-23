import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import classnames from "classnames";

const DropdownPopover = ({ btnData, content }) => {
	return (
		<Popover className="relative">
			<Popover.Button className={btnData.className}>
				<img src={btnData.icon} />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="ud-c-popover">
					<div className="ud-c-popover__content">
						<div
							className={classnames(
								"ud-c-popover__content__wrap",
								btnData.contentClass
							)}
						>
							{content}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default DropdownPopover;
