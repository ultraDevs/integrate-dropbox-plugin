<?php

namespace Kunnu\Dropbox\Models;

class Tag extends BaseModel {

    protected $tag;

    public function __construct(array $data) {
        parent::__construct($data);
        $this->tag = $this->getDataProperty('.tag');
    }

    /**
     * Get the 'tag' property of the metadata.
     *
     * @return string
     */
    public function getTag() {
        return $this->tag;
    }
}
