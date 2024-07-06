interface ImageInterface {
  classes: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority: boolean;
}

export default function Image(props: ImageInterface) {
  const { classes, src, alt, height, width, priority, ...rest } = props;
  return (
    <picture className={classes} {...rest}>
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}
