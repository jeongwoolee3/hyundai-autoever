import { steps } from "../mocks/data/process";

const ProcessInfo = () => {
  return (
    <div>
      <h2
        className="my-[var(--heading-2-margin)] leading-[var(--line-height-sm)] font-bold"
        style={{
          fontSize: "var(--heading-2)",
          margin: "var(--heading-2-margin)",
        }}
      >
        이용 프로세스 안내
      </h2>
      <ol className="flex leading-[var(--line-height-sm)] -mx-[calc(var(--space-md)/2)]">
        {steps.map((step, index) => (
          <li
            key={index}
            className="relative flex-1 basis-0 px-[calc(var(--space-md)/2)] pl-[24px]"
          >
            {index !== 0 && (
              <img
                src="/icons/ic_step_arrow.svg"
                alt=""
                className="absolute left-[-10px] top-1/2 translate-y-[-30%] w-[24px] h-[24px] "
              />
            )}
            <img
              src={step.icon}
              alt={step.title}
              className="w-[var(--ic-xlg)] h-[var(--ic-xlg)] mb-[8px] block"
            />
            <span className="relative block">
              <strong className="text-[18px]">{`${index + 1}. ${
                step.title
              }`}</strong>
              <em className="block text-[var(--gray-700)] mt-[8px] not-italic text-[16px]">
                {step.description}
              </em>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProcessInfo;
